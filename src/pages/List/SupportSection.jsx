import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "components/Card";
import Button from "components/Button";
import styles from "./List.module.scss";

export default function SupportSection() {
  const [donations, setDonations] = useState([]);
  const [cursorArr, setCursorArr] = useState([0]);
  const [page, setPage] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const slider = useRef();

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - slider.current.offsetLeft);
    setScrollLeft(slider.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsDown(false);
  };
  const handleMouseUp = () => {
    setIsDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX;

    slider.current.scrollLeft = scrollLeft - walk;
  };

  const handleLoad = async (nextCursor = 0) => {
    const instance = axios.create({
      baseURL: "https://fandom-k-api.vercel.app/6-4",
      timeout: 10000,
    });

    const response = await instance.get(
      `/donations?pageSize=4&cursor=${nextCursor}`,
    );

    setDonations(response.data.list);
    if (
      !cursorArr.includes(response.data.nextCursor) &&
      response.data.nextCursor !== null
    ) {
      setCursorArr((prevArr) => [...prevArr, response.data.nextCursor]);
    }

    if (page === 0) {
      setPrevBtnDisabled(true);
    } else {
      setPrevBtnDisabled(false);
    }
    if (response.data.nextCursor === null) {
      setNextBtnDisabled(true);
    } else {
      setNextBtnDisabled(false);
    }
  };

  const handlePrevBtn = () => {
    if (donations.length < 4 && page === 0) {
      setPage((prevValue) => prevValue);
    } else if (page > 0) {
      setPage((prevValue) => prevValue - 1);
    }
  };

  const handleNextBtn = () => {
    if (donations.length < 4) {
      setPage((prevValue) => prevValue);
    } else {
      setPage((prevValue) => prevValue + 1);
    }
  };

  useEffect(() => {
    handleLoad(cursorArr[page]);
  }, [page, prevBtnDisabled, nextBtnDisabled]);

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>후원을 기다리는 조공</h2>
        <div className={styles.sectionContent}>
          <div className={styles.slideContainer}>
            <div className={styles.sliderBtn}>
              <Button.Arrow
                direction="left"
                onClick={handlePrevBtn}
                disabled={prevBtnDisabled}
              />
            </div>
            <ul
              className={styles.supportLists}
              ref={slider}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {donations.map((donation) => {
                return (
                  <li key={donation.idolId} className={styles.supportList}>
                    <Card.Support donation={donation} />
                  </li>
                );
              })}
            </ul>
            <div className={styles.sliderBtn}>
              <Button.Arrow
                direction="right"
                onClick={handleNextBtn}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
