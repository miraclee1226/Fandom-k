import { useState } from "react";
import { useAtom } from "jotai";
import Button from "components/Button";
import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import Modal from "components/Modal";
import creditAtomWithPersistence from "context/jotai";
import styles from "./List.module.scss";

export default function CreditSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [credit, setCredit] = useAtom(creditAtomWithPersistence);

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
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
        <Button.Text className={styles.rightContent} onClick={handleModalOpen}>
          충전하기
        </Button.Text>
        <Modal.CreditCharge isOpen={isOpen} handleModalOpen={handleModalOpen} />
      </div>
    </section>
  );
}
