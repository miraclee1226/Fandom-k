import styles from "./SupportCard.module.scss";
import creditImg from "../../assets/credit.png";
import DefaultButton from "../Button/Button";
import LineGraph from "./LineGraph";

export default function SupportCard() {
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
        <strong className={styles.category}>강남역 광고</strong>
        <h3 className={styles.title}>
          뉴진스 민지 지하철 광고 뉴진스 민지 지하철 광고
        </h3>
      </div>
      <div className={styles.creditWrap}>
        <div className={styles.creditInfo}>
          <strong className={styles.credit}>
            <img src={creditImg} alt="필요 크레딧" width="12" />
            <span>6,000</span>
          </strong>
          <p className={styles.date}>5일 남음</p>
        </div>
        <div>
          <LineGraph width="282" percent="50" />
        </div>
      </div>
    </div>
  );
}
