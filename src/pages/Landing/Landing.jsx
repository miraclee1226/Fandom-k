import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import logo from "assets/logo.png";
import landing1 from "assets/landing1.png";
import landing2 from "assets/landing2.png";
import landing3 from "assets/landing3.png";
import landing4 from "assets/landing4.png";
import home1 from "assets/Home-1.png";
import home2 from "assets/Home-2.png";
import home3 from "assets/Home-3.png";
import styles from "pages/Landing/Landing.module.scss";

export default function Landing({ childeren, onClick }) {
  const navigate = useNavigate();

  return (
    <div className={styles.landingView}>
      <div className={styles.centerLine}></div>
      <section className={styles.landingSection1}>
        <h2>
          내가 좋아하는 아이돌을
          <br />
          가장 <span className={styles.spanWord}>쉽게 덕질</span> 하는 방법
        </h2>
        <img className={styles.landingLogo} src={logo} alt="로고" />
        <img
          className={styles.landingBackground}
          src={landing1}
          alt="배경 이미지"
        />
        <div className={styles.backgroundLinear}></div>
        <Button
          className={styles.landingButton}
          onClick={() => {
            navigate("/list");
          }}
        >
          지금 시작하기
        </Button>
      </section>
      <section className={`${styles.landingSection} ${styles.landingSection2}`}>
        <div className={styles.sectionContent}>
          <div className={styles.landingTitle}>
            <span className={styles.mainTitle}>후원하기</span>
            <p className={styles.subTitle}>
              좋아하는 아이돌에게
              <br />
              쉽게 조공해 보세요
            </p>
          </div>
          <div className={styles.sectionImgWrap}>
            <img className={styles.homeImg} src={home1} alt="홈 사진1" />
            <img
              className={styles.backgroundImg}
              src={landing2}
              alt="배경 사진1"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.landingSection} ${styles.landingSection3}`}>
        <div className={styles.sectionContent}>
          <div className={styles.landingRightTitle}>
            <span className={styles.mainTitle}>이달의 아티스트</span>
            <p className={styles.subTitle}>
              내 아티스트에게 1등의
              <br />
              영예를 선물하세요
            </p>
          </div>
          <div className={styles.sectionImgWrap}>
            <img className={styles.homeImg} src={home2} alt="홈 사진2" />
            <img
              className={styles.backgroundImg}
              src={landing3}
              alt="배경 사진2"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.landingSection} ${styles.landingSection4}`}>
        <div className={styles.sectionContent}>
          <div className={styles.landingTitle}>
            <span className={styles.mainTitle}>나만의 아티스트</span>
            <p className={styles.subTitle}>
              좋아하는 아티스트들의
              <br />
              소식을 모아보세요
            </p>
          </div>
          <div className={styles.sectionImgWrap}>
            <img className={styles.homeImg} src={home3} alt="홈 사진3" />
            <img
              className={styles.backgroundImg}
              src={landing4}
              alt="배경 사진3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
