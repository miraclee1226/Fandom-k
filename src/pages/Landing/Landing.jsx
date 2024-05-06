import Button from "components/Button";
import logo from "assets/logo.png";
import LANDING_IMG from "assets/landing-img";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.view}>
      <div className={styles.centerLine}></div>
      <section className={styles.thumbnail}>
        <h2>
          내가 좋아하는 아이돌을
          <br />
          가장 <span className={styles.highlight}>쉽게 덕질</span> 하는 방법
        </h2>
        <img className={styles.thumbnailLogo} src={logo} alt="로고" />
        <img
          className={styles.thumbnailBackground}
          src={LANDING_IMG.THUMBNAIL}
          alt="배경 이미지"
        />
        <div className={styles.thumbnailLinear}></div>
        <Button.Link className={styles.startButton} to={"/list"}>
          지금 시작하기
        </Button.Link>
      </section>
      <section className={`${styles.commonSection} ${styles.firstSection}`}>
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
            <img
              className={styles.mobileImg}
              src={LANDING_IMG.MOBILE1}
              alt="홈 사진1"
            />
            <img
              className={styles.sectionBGImg}
              src={LANDING_IMG.SECTION1}
              alt="배경 사진1"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.commonSection} ${styles.secondSection}`}>
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
            <img
              className={styles.mobileImg}
              src={LANDING_IMG.MOBILE2}
              alt="홈 사진2"
            />
            <img
              className={styles.sectionBGImg}
              src={LANDING_IMG.SECTION2}
              alt="배경 사진2"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.commonSection} ${styles.thirdSection}`}>
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
            <img
              className={styles.mobileImg}
              src={LANDING_IMG.MOBILE3}
              alt="홈 사진3"
            />
            <img
              className={styles.sectionBGImg}
              src={LANDING_IMG.SECTION3}
              alt="배경 사진3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
