import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import classNames from "classnames/bind";
import Button from "components/Button";
import Image from "components/Image";
import { addCommas } from "utils/commas";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import useRequest from "hooks/useRequest";
import Modal from "components/Modal";
import creditAtomWithPersistence from "context/Credit";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const cn = classNames.bind(styles);

const SUBTRACT_CREDIT = 1000;
const ERROR_MSG = "리스트를 불러오는데 실패했습니다.";

export default function VoteModal({ error, isOpen, handleModalOpen, gender }) {
  const [checkedValue, setCheckedValue] = useState("");
  const [data, setData] = useState([]);
  const [credit, setCredit] = useAtom(creditAtomWithPersistence);
  const { requestFunc: getChartData } = useRequest({
    skip: true,
    options: {
      method: "get",
      url: `/charts/${gender}`,
      params: {
        gender,
        pageSize: 100,
      },
    },
  });

  const handleLoad = async () => {
    const response = await getChartData();

    setData(response?.data?.idols);
  };

  const handleVote = async () => {
    const updatedCredit = Number(credit) - SUBTRACT_CREDIT;

    setCredit(updatedCredit);

    handleModalOpen(false);
    await voteIdols();
  };

  const handleRadioChange = (e) => {
    setCheckedValue(e.target.value);
  };

  const { requestFunc: voteIdols } = useRequest({
    skip: true,
    options: {
      method: "post",
      url: "/votes",
      data: {
        idolId: checkedValue,
      },
    },
  });

  useEffect(() => {
    handleLoad();
  }, [gender]);

  return (
    <DefaultModal isOpen={isOpen} handleModalOpen={handleModalOpen}>
      <div className={styles.voteModal}>
        <div className={styles.header}>
          <h1>이달의 {gender === "female" ? "여자" : "남자"} 아이돌</h1>
          <XIcon
            className={styles.xIcon}
            opacity={0.5}
            onClick={() => handleModalOpen(false)}
          />
        </div>
        {error && <div className={styles.error}>{ERROR_MSG}</div>}
        <div className={styles.main}>
          {data?.map((idol) => (
            <VoteItem
              key={idol.id}
              data={idol}
              checkedValue={checkedValue}
              handleRadioChange={handleRadioChange}
            />
          ))}
        </div>

        <div className={styles.footer}>
          <Button
            className={styles.voteBtn}
            onClick={handleVote}
            disabled={!checkedValue}
          >
            투표하기
          </Button>
          <span>
            투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
          </span>
        </div>
      </div>
    </DefaultModal>
  );
}

function VoteItem({ data, checkedValue, handleRadioChange }) {
  const profileClasses = cn({
    [styles.profile]: true,
    [styles.isChecked]: checkedValue === String(data.id),
  });

  return (
    <div className={styles.voteItem}>
      <div className={styles.content}>
        <div className={profileClasses}>
          <div className={styles.roundImage}>
            <Image.Round size="sm" src={data.profilePicture} lazyMode={true} />
          </div>
        </div>
        <span className={styles.rank}>{data.rank}</span>
        <span className={styles.name}>
          {data.group} {data.name}
        </span>
        <span className={styles.votes}>{addCommas(data.totalVotes)}표</span>
      </div>

      <div className={styles.btnBox}>
        <Button.Radio
          id={`radio-${data.id}`}
          name="vote-item"
          value={String(data.id)}
          checkedValue={checkedValue}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
