import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import Tab from "components/Tab";
import ChartItem from "components/ChartItem";
import Button from "components/Button";
import { ReactComponent as ChartIcon } from "assets/icons/chart.svg";
import Modal from "components/Modal";
import useRequest from "hooks/useRequest";
import creditAtomWithPersistence from "context/jotai";
import styles from "./List.module.scss";

export default function ChartSection() {
  const [gender, setGender] = useState("female");
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWarningModal, setIsOpenWarningModal] = useState(false);
  const [credit, setCredit] = useAtom(creditAtomWithPersistence);
  const { requestFunc: getChartData } = useRequest({
    skip: true,
    options: {
      method: "get",
      url: `/charts/${gender}`,
      params: {
        gender,
        pageSize,
      },
    },
  });

  const handleTabChange = (index) => {
    setGender(index === 0 ? "female" : "male");
  };

  const handleButtonClick = () => setPageSize((prev) => prev + 10);

  const handleModalOpen = async (isModalOpen) => {
    if (Number(credit) > 999) {
      setIsOpen(isModalOpen);
      await getChartData();
    } else {
      setIsOpenWarningModal(isModalOpen);
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      const result = await getChartData();

      setData(result?.data?.idols);
    }, 100);
  }, [gender, pageSize, isOpen]);

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>이달의 차트</h2>
          <Button.Round className={styles.voteButton} onClick={handleModalOpen}>
            <ChartIcon />
            차트 투표하기
          </Button.Round>
          <Modal.Vote
            data={data}
            isOpen={!!isOpen}
            handleModalOpen={handleModalOpen}
            gender={gender}
          />
          <Modal.CreditWarning
            isOpen={!!isOpenWarningModal}
            handleModalOpen={handleModalOpen}
          />
        </div>
        <div className={styles.sectionDetail}>
          <div className={styles.tab}>
            <Tab handleTabChange={handleTabChange} />
          </div>
          <ul className={styles.chartList}>
            {data &&
              data.map((chartItem, index) => (
                <ChartItem key={chartItem.id} data={chartItem} />
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

