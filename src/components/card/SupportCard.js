import style from "./SupportCard.module.scss";
import creditImg from "../../assets/credit.png";

export default function SupportCard() {
  const supportRate = 75;
  const length = (282 * supportRate) / 100;

  return (
    <div className={style.supportCard}>
      <div className={style.content}>
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMThfMjAz%2FMDAxNjczOTcwNzQ3NDg2._l8C4TNMoXLMhftgGxhdy1rFRmHPug997-_GIsMKZOcg.VDaJ72QJarXLOAzrR6CwEc8iuT365WmOj2s1ny6SJ0gg.JPEG.nevergetold%2FFmoSb0bWIAIE7S5.jpg&type=sc960_832"
          alt="뉴진스 민지 이미지"
        />
        <button type="button" className={style.btnSupport}>
          후원하기
        </button>
      </div>
      <div className={style.header}>
        <strong className={style.category}>강남역 광고</strong>
        <h3 className={style.title}>
          뉴진스 민지 지하철 광고 뉴진스 민지 지하철 광고
        </h3>
      </div>
      <div className={style.creditWrap}>
        <div className={style.creditInfo}>
          <strong className={style.credit}>
            <img src={creditImg} alt="필요 크레딧" width="12" />
            <span>6,000</span>
          </strong>
          <p className={style.date}>5일 남음</p>
        </div>
        <div>
          <svg
            width="282"
            height="1"
            viewBox="0 0 282 1"
            className={style.creditGraph}
          >
            <line
              x1="0"
              y1="1"
              x2="282"
              y2="1"
              fill="none"
              stroke-width="1"
              stroke="#fff"
              stroke-linecap="round"
            />
            <line
              x1="0"
              y1="1"
              x2={length}
              y2="1"
              fill="none"
              stroke-width="1"
              stroke="#FC4D04"
              stroke-dasharray="282"
              stroke-dashoffset="dashOffsetLine"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
