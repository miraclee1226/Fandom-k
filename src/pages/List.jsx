import { useRef, useState } from "react";
import Navbar from "components/Navbar/Navbar";
import Layout from "components/Layout/Layout";
import Button from "components/Button/Button";
import SupportCard from "components/Card/SupportCard";
import styles from "./List.module.scss";

export default function List() {

  return (
    <>
      <Navbar />
      <Layout>
        <SupportSection />
      </Layout>
    </>
  );
}

function SupportSection() {
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
      <div className={styles.view}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>후원을 기다리는 조공</h2>
          <div className={styles.sectionContent}>
            <div className={styles.slideContainer}>
              <div className={styles.slideBtn}>
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
                <li className={styles.supportList}>
                  <SupportCard />
                </li>
                <li className={styles.supportList}>
                  <SupportCard />
                </li>
                <li className={styles.supportList}>
                  <SupportCard />
                </li>
                <li className={styles.supportList}>
                  <SupportCard />
                </li>
              </ul>
              <div className={styles.slideBtn}>
                <Button.Arrow direction="right" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
