import { useState } from "react";
import { addCommas } from "utils/commas";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import Button from "components/Button";
import RoundImage from "components/Image/RoundImage/RoundImage";
import classNames from "classnames/bind";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const MOCK_DATA = [
  {
    id: 0,
    name: "장원영1",
    group: "아이브1",
    profilePicture: "https://example.com/profile.jpg",
    totalVotes: 10000,
    rank: 1,
  },
  {
    id: 1,
    name: "장원영2",
    group: "아이브2",
    profilePicture: "https://example.com/profile.jpg",
    totalVotes: 9000,
    rank: 2,
  },
  {
    id: 2,
    name: "장원영3",
    group: "아이브3",
    profilePicture: "https://example.com/profile.jpg",
    totalVotes: 8000,
    rank: 3,
  },
  {
    id: 3,
    name: "장원영4",
    group: "아이브4",
    profilePicture: "https://example.com/profile.jpg",
    totalVotes: 7000,
    rank: 4,
  },
  {
    id: 4,
    name: "장원영5",
    group: "아이브5",
    profilePicture: "https://example.com/profile.jpg",
    totalVotes: 6000,
    rank: 5,
  },
  {
    id: 5,
    name: "장원영6",
    group: "아이브6",
    profilePicture: "https://example.com/profile.jpg",
    totalVotes: 5000,
    rank: 6,
  },
];

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
          <RoundImage />
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
