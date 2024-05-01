import Navbar from "components/Navbar/Navbar";
import creditIcon from "assets/icons/credit.svg";
import styles from "./List.module.scss";

export default function List() {
  return (
    <>
      <Navbar />
      <CreditSection />
    </>
  );
}

// TODO: Util 함수

function CreditSection() {
  return (
    <div className={styles.creditSection}>
      <div className={styles.leftContent}>
        <span>내 크레딧</span>
        <div className={styles.credit}>
          <img src={creditIcon} alt="credit" />
          <span>36,000</span>
        </div>
      </div>
      <div className={styles.rightContent}>충전하기</div>
    </div>
  );
}
