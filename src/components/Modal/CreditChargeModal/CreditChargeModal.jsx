import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import Button from "components/Button";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

export default function CreditChargeModal({ isOpen, handleModalOpen }) {
  const handleChargeCredit = () => {
    // TODO: Credit 충전 핸들러
    handleModalOpen(false);
  };

  return (
    <DefaultModal isOpen={isOpen} handleModalOpen={handleModalOpen}>
      <div className={styles.creditChargeModal}>
        <div className={styles.header}>
          <h1>크레딧 충전하기</h1>
          <XIcon
            className={styles.xIcon}
            opacity={0.5}
            onClick={() => handleModalOpen(false)}
          />
        </div>

        <div className={styles.main}>
          {[100, 500, 1000].map((chargeAmount) => (
            <ChargeItem key={chargeAmount} chargeAmount={chargeAmount} />
          ))}
        </div>

        <div className={styles.footer}>
          <Button onClick={handleChargeCredit}>충전하기</Button>
        </div>
      </div>
    </DefaultModal>
  );
}

function ChargeItem({ chargeAmount }) {
  return (
    <div className={styles.chargeItem}>
      <CreditIcon width={24} height={24} />
      <span>{chargeAmount}</span>
      <Button.Radio />
    </div>
  );
}
