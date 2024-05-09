import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import creditAtom from "context/credit";
import useResponsive from "hooks/useResponsive";
import useRequest from "hooks/useRequest";
import Modal from "components/Modal";
import Card from "components/Card";
import Button from "components/Button";
import styles from "./List.module.scss";

export default function SupportSection() {
  const [credit, setCredit] = useAtom(creditAtom);
  const [donations, setDonations] = useState([]);
  const [nextCursor, setNextCursor] = useState(0);
  const [cursorArr, setCursorArr] = useState([0]);
  const [page, setPage] = useState(0);
  const [isPC, isTablet, isMobile] = useResponsive();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const slider = useRef();

  const {
    data,
    isLoading,
    error,
    requestFunc: getDonationsData,
  } = useRequest({
    skip: true,
    options: {
      method: "get",
      url: "/donations",
      params: {
        pageSize: isPC ? 4 : null,
        cursor: cursorArr[page],
      },
    },
  });
  const handleModalOpen = (boolean, content) => {
    setModalContent(content);
    setIsModalOpen(boolean);
  };

  const handleUpdate = (creditAmount) => {
    setCredit((prevCredit) => prevCredit - creditAmount);
    handleLoad();
  };

  const handleLoad = async () => {
    const response = await getDonationsData();

    if (isPC) {
      setNextCursor(response.data.nextCursor);
      setPagination(response.data.nextCursor);
    } else {
      setNextCursor(0);
      setPage(0);
    }
    setDonations(response.data.list);
  };

  const setPagination = (cursor) => {
    if (!cursorArr.includes(cursor) && cursor !== null) {
      setCursorArr((prevArr) => [...prevArr, cursor]);
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

  useEffect(() => {
    handleLoad();
  }, [page, isPC, credit]);

  return (
    <>
      <section className={styles.section}>
        <Modal.Support
          isOpen={isModalOpen}
          handleModalOpen={handleModalOpen}
          content={modalContent}
          handleUpdate={handleUpdate}
        />
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
                    <Card.Support
                      donation={donation}
                      handleModalOpen={handleModalOpen}
                    />
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
