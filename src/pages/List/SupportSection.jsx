import { useRef, useState } from "react";
import Card from "components/Card";
import Button from "components/Button";
import Modal from "components/Modal";
import donationMockData from "mockData/donations.json";
import styles from "./List.module.scss";

export default function SupportSection() {
  const [donations, setDonations] = useState(donationMockData);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slider = useRef();

  const handleModalOpen = (boolean) => {
    setIsModalOpen(boolean);
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

  return (
    <>
      <section className={styles.section}>
        <Modal.Support isOpen={isModalOpen} handleModalOpen={handleModalOpen} />
        <h2 className={styles.sectionTitle}>후원을 기다리는 조공</h2>
        <div className={styles.sectionContent}>
          <div className={styles.slideContainer}>
            <div className={styles.sliderBtn}>
              <Button.Arrow direction="left" />
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
              <Button.Arrow direction="right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
