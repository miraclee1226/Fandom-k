import RoundImage from "components/Image/RoundImage/RoundImage";
import styles from "components/ChartItem/ChartItem.module.scss";

export default function ChartItem() {
  return (
    <div className={styles.chartItemContainer}>
      <div className={styles.content}>
        <RoundImage />
        <span className={styles.ranking}>1</span>
        <span className={styles.name}>르세라핌 채원</span>
      </div>
      <span className={styles.votes}>204,000표</span>
    </div>
  );
}
