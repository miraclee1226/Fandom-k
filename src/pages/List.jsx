import { useRef } from "react";
import SupportCard from "../components/Card/SupportCard";
import styles from "./List.module.scss";
import ArrowButton from "../components/Button/ArrowButton/ArrowButton";

export default function List() {
  const slider = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
  };

  const handleMouseLeave = (e) => {
    isDown = false;
  };

  const handleMouseUp = (e) => {
    isDown = false;
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
                <ArrowButton direction="left" />
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
                <ArrowButton direction="right" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
