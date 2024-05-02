import RoundImage from "components/Image/RoundImage/RoundImage";
import styles from "components/ChartItem/ChartItem.module.scss";

export default function ChartItem({ data }) {
  return (
    <div className={styles.chartItemContainer}>
      <div className={styles.content}>
        <RoundImage />
        <span className={styles.ranking}>{data.rank}</span>
        <strong className={styles.name}>{data.name}</strong>
      </div>
      <span className={styles.votes}>{data.totalVotes}</span>
    </div>
  );
}
