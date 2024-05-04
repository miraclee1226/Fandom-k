import { useRef, useState } from "react";
import Card from "components/Card";
import Button from "components/Button";
import donationMockData from "mockData/donations.json";
import styles from "./List.module.scss";

export default function SupportSection() {
  const [donations, setDonations] = useState(donationMockData);
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

  return (
    <>
      <section className={styles.section}>
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
                    <Card.Support donation={donation} />
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
