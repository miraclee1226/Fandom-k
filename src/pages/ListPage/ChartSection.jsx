import { useState } from "react";
// Component
import Button from "components/Button";
import Tab from "components/Tab";
import ChartItem from "components/ChartItem";
// Design
import { ReactComponent as ChartIcon } from "assets/icons/chart.svg";
import styles from "pages/List.module.scss";
// MockData
import femaleData from "mockData/femaleData";
import maleData from "mockData/maleData";

export default function ChartSection() {
  const [sortedData, setSortedData] = useState(
    [...femaleData].sort((a, b) => b.totalVotes - a.totalVotes),
  );

  const handleTabChange = (index) => {
    const selectedGender = index === 0 ? [...femaleData] : [...maleData];

    setSortedData(selectedGender.sort((a, b) => b.totalVotes - a.totalVotes));
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>이달의 차트</h2>
          <Button.Round className={styles.voteButton}>
            <ChartIcon />
            차트 투표하기
          </Button.Round>
        </div>
        <div className={styles.sectionDetail}>
          <div className={styles.tab}>
            <Tab handleTabChange={handleTabChange} />
          </div>
          <ul className={styles.chartList}>
            {sortedData.map((data, index) => (
              <ChartItem key={data.id} data={data} />
            ))}
          </ul>
          <Button.Border className={styles.borderButton}>더보기</Button.Border>
        </div>
      </div>
    </section>
  );
}
