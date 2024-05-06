import Image from "components/Image";
import styles from "./ChartItem.module.scss";

export default function ChartItem({ data }) {
  return (
    <div className={styles.chartItemContainer}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image.Round src={data.profilePicture} lazyMode={true} />
        </div>
        <span className={styles.ranking}>{data.rank}</span>
        <strong className={styles.name}>{data.name}</strong>
      </div>
      <span className={styles.votes}>{data.totalVotes.toLocaleString()}</span>
    </div>
  );
}
