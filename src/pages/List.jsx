import { useRef, useState } from "react";
import donationMockData from "mockData/donations.json";
import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";
import Button from "components/Button";
import Card from "components/Card";
import ChartSection from "pages/ListPage/ChartSection";
import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import styles from "./List.module.scss";

export default function List() {
  return (
    <>
      <Navbar />
      <Layout>
        <CreditSection />
        <SupportSection />
        <ChartSection />
      </Layout>
    </>
  );
}

function CreditSection() {
  const handleChargeCredit = () => {
    // TODO: 충전 Modal을 pop up 합니다.
  };

  return (
    <section className={styles.section}>
      <div className={styles.creditSection}>
        <div className={styles.leftContent}>
          <span>내 크레딧</span>
          <div className={styles.credit}>
            <img src={creditIcon} alt="credit" />
            <span>{(36000).toLocaleString()}</span>
          </div>
        </div>
        <Button.Text
          className={styles.rightContent}
          onClick={handleChargeCredit}
        >
          충전하기
        </Button.Text>
      </div>
    </section>
  );
}

function SupportSection() {
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
