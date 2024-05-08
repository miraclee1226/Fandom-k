import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Button from "components/Button";
import Image from "components/Image";
import { addCommas } from "utils/commas";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import femaleData from "mockData/femaleData";
import useRequest from "hooks/useRequest";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const SUBTRACT_CREDIT = 1000;
const cn = classNames.bind(styles);

export default function VoteModal({ data, isOpen, handleModalOpen, gender }) {
  const [checkedValue, setCheckedValue] = useState("");
  const [credit, setCredit] = useState(0);
  const getCredit = () => {
    const storedCredit = localStorage.getItem("Credit");

    return storedCredit || 1000000;
  };

  const handleVote = async () => {
    setCredit((prev) => prev - SUBTRACT_CREDIT);

    localStorage.setItem("Credit", credit - SUBTRACT_CREDIT);

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
    setCredit(getCredit());
  }, []);

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
