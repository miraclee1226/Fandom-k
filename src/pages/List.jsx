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

function CreditSection() {
  const handleChargeCredit = () => {
    // TODO: 충전 Modal을 pop up 합니다.
  };

  return (
    <div className={styles.creditSection}>
      <div className={styles.leftContent}>
        <span>내 크레딧</span>
        <div className={styles.credit}>
          <img src={creditIcon} alt="credit" />
          <span>{(36000).toLocaleString()}</span>
        </div>
      </div>
      <div className={styles.rightContent} onClick={handleChargeCredit}>
        충전하기
      </div>
    </div>
  );
}
