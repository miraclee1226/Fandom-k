import { useState, useEffect } from "react";
import Tab from "components/Tab";
import ChartItem from "components/ChartItem";
import Button from "components/Button";
import { ReactComponent as ChartIcon } from "assets/icons/chart.svg";
import useRequest from "hooks/useRequest";
import styles from "./List.module.scss";

export default function ChartSection() {
  const [gender, setGender] = useState("female");
  const [pageSize, setPageSize] = useState(10);
  const [sortedData, setSortedData] = useState([]);
  const { requestFunc: getChartData } = useRequest({
    skip: true,
    options: {
      method: "get",
      url: "/charts/{gender}",
      params: {
        gender,
        pageSize,
      },
    },
  });
  // getChartData 함수를 호출함으로써 data를 가져옵니다.

  const handleTabChange = (index) => {
    setGender(index === 0 ? "female" : "male");
  };

  const handleButtonClick = () => setPageSize((prev) => prev + 10);

  useEffect(() => {
    (async () => {
      const result = await getChartData();

      setSortedData(result?.data.idols);
    })();
  }, [gender, pageSize]);
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
          <Button.Border
            onClick={handleButtonClick}
            className={styles.borderButton}
          >
            더보기
          </Button.Border>
        </div>
      </div>
    </section>
  );
}
