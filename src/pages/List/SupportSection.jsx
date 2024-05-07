import { useEffect, useRef, useState } from "react";
import useResponsive from "hooks/useResponsive";
import axios from "axios";
import getDonationsData from "api/getDonationsData";
import useAsync from "hooks/useAsync";
import Card from "components/Card";
import Button from "components/Button";
import styles from "./List.module.scss";

export default function SupportSection() {
  const [donations, setDonations] = useState([]);
  const {
    wrappedFunc: getDonationsDataAsync,
    pending: loading,
    error,
  } = useAsync(getDonationsData);
  const [nextCursor, setNextCursor] = useState(0);
  const [cursorArr, setCursorArr] = useState([0]);
  const [page, setPage] = useState(0);
  const [isPC, isTablet, isMobile] = useResponsive();
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

  const setPagination = () => {
    if (!cursorArr.includes(nextCursor) && nextCursor !== null) {
      setCursorArr((prevArr) => [...prevArr, nextCursor]);
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
    (async () => {
      const result = await getDonationsDataAsync({
        pageSize: isPC ? 4 : null,
        cursor: isPC ? cursorArr[page] : 0,
      });

      if (isPC) {
        setNextCursor(result.data.nextCursor);
        setPagination();
      } else {
        setNextCursor(0);
        setPage(0);
      }
      setDonations(result.data.list);
    })();
  }, [donations]);

  if (error)
    return (
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>후원을 기다리는 조공</h2>
        <div className={styles.sectionContent}>
          리스트를 불러오는데 실패했습니다.
        </div>
      </section>
    );

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
                disabled={page === 0}
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
                disabled={nextCursor === null}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
