import Button from "components/Button";
import timeCounter from "utils/timeCounter";
import creditImg from "assets/credit.png";
import Image from "components/Image";
import styles from "../SupportCard.module.scss";

export default function SupportCard({ donation, handleModalOpen }) {
  return (
    <div className={styles.supportCard}>
      <div className={styles.content}>
        <div className={styles.imgWrap}>
          <Image.Rectangle
            src={donation.idol.profilePicture}
            alt={`${donation.idol.group} ${donation.idol.name} 이미지`}
            lazyMode={true}
          />
        </div>
        <Button
          onClick={() => handleModalOpen(true, donation)}
          disabled={donation.receivedDonations >= donation.targetDonation}
        >
          {donation.receivedDonations >= donation.targetDonation
            ? "후원 종료"
            : "후원하기"}
        </Button>
      </div>
      <div className={styles.header}>
        <strong className={styles.category}>{donation.subtitle}</strong>
        <h3 className={styles.title}>{donation.title}</h3>
      </div>
      <div className={styles.creditWrap}>
        <div className={styles.creditInfo}>
          <strong className={styles.credit}>
            <img src={creditImg} alt="필요 크레딧" width="12" />
            <span>{donation.targetDonation.toLocaleString()}</span>
          </strong>
          <p className={styles.date}>{timeCounter(donation.deadline)}일 남음</p>
        </div>
        <div>
          <LineGraph
            targetDonation={donation.targetDonation}
            credit={donation.receivedDonations}
          />
        </div>
      </div>
    </div>
  );
}

function LineGraph({ targetDonation, credit }) {
  const graphLength = (credit * 100) / targetDonation;

  return (
    <svg width="100%" height="1" className={styles.lineGraph}>
      <line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        fill="none"
        strokeWidth="1"
        stroke="#fff"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="1"
        x2={`${graphLength}%`}
        y2="1"
        fill="none"
        strokeWidth="1"
        stroke="#FC4D04"
        strokeLinecap="round"
      />
    </svg>
  );
}
