import defaultImg from "assets/default_image.png";
import styles from "../Skeleton.module.scss";

export default function SupportSkeleton() {
  return (
    <div className={styles.supportSkeleton}>
      <div className={styles.cardContainer}>
        <ul className={styles.cardLists}>
          <li className={styles.cardList}>
            <Card />
          </li>
          <li className={styles.cardList}>
            <Card />
          </li>
          <li className={styles.cardList}>
            <Card />
          </li>
          <li className={styles.cardList}>
            <Card />
          </li>
        </ul>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={defaultImg} className={styles.img} alt="이미지" />
      </div>
      <div className={styles.header}>
        <span className={styles.category}></span>
        <span className={styles.title}></span>
      </div>
    </div>
  );
}
