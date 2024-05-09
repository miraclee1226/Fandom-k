import { creditAtom } from "App";
import { useAtom } from "jotai";
import Button from "components/Button";
import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import styles from "./List.module.scss";

export default function CreditSection() {
  const [credit, setCredit] = useAtom(creditAtom);
  const handleChargeCredit = () => {
    // TODO: 충전 Modal을 pop up 합니다.
  };

  return (
    <section className={styles.section}>
      <div className={styles.creditSection}>
        <div className={styles.leftContent}>
          <span>내 크레딧</span>
          <div className={styles.credit}>
            <CreditIcon width={24} height={24} />
            <span>{credit.toLocaleString()}</span>
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
