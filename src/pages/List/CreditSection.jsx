import Button from "components/Button";
import creditIcon from "assets/icons/credit.svg";
import styles from "./List.module.scss";

export default function CreditSection() {
  const handleChargeCredit = () => {
    // TODO: 충전 Modal을 pop up 합니다.
  };

  return (
    <section className={styles.section}>
      <div className={styles.creditSection}>
        <div className={styles.leftContent}>
          <span>내 크레딧</span>
          <div className={styles.credit}>
            <img src={creditIcon} alt="credit" />
            <span>{(36000).toLocaleString()}</span>
          </div>
        </div>
        <Button.Text
          className={styles.rightContent}
          onClick={handleChargeCredit}
        >
          충전하기
        </Button.Text>
      </div>
    </section>
  );
}
