import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import Tab from "components/Tab";
import ChartItem from "components/ChartItem";
import Button from "components/Button";
import { ReactComponent as ChartIcon } from "assets/icons/chart.svg";
import Modal from "components/Modal";
import useRequest from "hooks/useRequest";
import creditAtomWithPersistence from "context/Credit";
import styles from "./List.module.scss";

const ERROR_MSG = "리스트를 불러오는데 실패했습니다.";

export default function ChartSection() {
  const [gender, setGender] = useState("female");
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWarningModal, setIsOpenWarningModal] = useState(false);
  const [credit, setCredit] = useAtom(creditAtomWithPersistence);
  const [moreButton, setMoreButton] = useState(true);
  const { error, requestFunc: getChartData } = useRequest({
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
    setPageSize(10);
    setMoreButton(true);
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

      if (!result?.data?.nextCursor) setMoreButton(false);

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
            error={error}
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
          {error && <div className={styles.error}>{ERROR_MSG}</div>}
          <ul className={styles.chartList}>
            {data &&
              data.map((chartItem, index) => (
                <ChartItem key={chartItem.id} data={chartItem} />
              ))}
          </ul>
          {moreButton ? (
            <Button.Border
              onClick={handleButtonClick}
              className={styles.borderButton}
            >
              더보기
            </Button.Border>
          ) : (
            <h1 className={styles.noData}>더 불러올 데이터가 없습니다.</h1>
          )}
        </div>
      </div>
    </section>
  );
}
