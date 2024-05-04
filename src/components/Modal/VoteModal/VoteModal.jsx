import { useState } from "react";
import classNames from "classnames/bind";
import Button from "components/Button";
import Image from "components/Image";
import { addCommas } from "utils/commas";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import femaleData from "mockData/femaleData";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const MOCK_DATA = femaleData.slice(0, 6);

const cn = classNames.bind(styles);

export default function VoteModal({ isOpen, handleModalOpen }) {
  const [checkedValue, setCheckedValue] = useState("");

  const handleRadioChange = (e) => {
    setCheckedValue(e.target.value);
  };

  const handleVote = () => {
    // TODO: 투표 기능 추가
    handleModalOpen(false);
  };

  return (
    <DefaultModal isOpen={isOpen} handleModalOpen={handleModalOpen}>
      <div className={styles.voteModal}>
        <div className={styles.header}>
          <h1>이달의 여자 아이돌</h1>
          <XIcon
            className={styles.xIcon}
            opacity={0.5}
            onClick={() => handleModalOpen(false)}
          />
        </div>

        <div className={styles.main}>
          {MOCK_DATA.map((data) => (
            <VoteItem
              key={data.id}
              data={data}
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
          <Image.Round size="sm" />
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
