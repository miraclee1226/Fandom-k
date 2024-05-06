import DefaultButton from "components/Button/Button";
import timeCounter from "utils/timeCounter";
import creditImg from "assets/credit.png";
import styles from "../SupportCard.module.scss";

export default function SupportCard({ donation }) {
  return (
    <div className={styles.supportCard}>
      <div className={styles.content}>
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMThfMjAz%2FMDAxNjczOTcwNzQ3NDg2._l8C4TNMoXLMhftgGxhdy1rFRmHPug997-_GIsMKZOcg.VDaJ72QJarXLOAzrR6CwEc8iuT365WmOj2s1ny6SJ0gg.JPEG.nevergetold%2FFmoSb0bWIAIE7S5.jpg&type=sc960_832"
          alt="뉴진스 민지 이미지"
        />
        <DefaultButton>후원하기</DefaultButton>
      </div>
      <div className={styles.header}>
        <strong className={styles.category}>{donation.subtitle}</strong>
        <h3 className={styles.title}>{donation.title}</h3>
      </div>
      <div className={styles.creditWrap}>
        <div className={styles.creditInfo}>
          <strong className={styles.credit}>
            <img src={creditImg} alt="필요 크레딧" width="12" />
            <span>6,000</span>
          </strong>
          <p className={styles.date}>{timeCounter(donation.deadline)}일 남음</p>
        </div>
        <div>
          <LineGraph
            width="282"
            targetDonation={donation.targetDonation}
            credit={5000}
          />
        </div>
      </div>
    </div>
  );
}

function LineGraph({ width, targetDonation, credit }) {
  const graphLength = (credit / targetDonation) * width;

  return (
    <svg
      width={width}
      height="1"
      viewBox={`0 0 ${width} 1`}
      className={styles.lineGraph}
    >
      <line
        x1="0"
        y1="1"
        x2={width}
        y2="1"
        fill="none"
        strokeWidth="1"
        stroke="#fff"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="1"
        x2={graphLength}
        y2="1"
        fill="none"
        strokeWidth="1"
        stroke="#FC4D04"
        strokeDasharray={width}
        strokeDashoffset="dashOffsetLine"
        strokeLinecap="round"
      />
    </svg>
  );
}
