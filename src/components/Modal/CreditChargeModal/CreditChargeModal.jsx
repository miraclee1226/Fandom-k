import { useState } from "react";
import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import Button from "components/Button";
import classNames from "classnames/bind";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const cn = classNames.bind(styles);

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
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const chargeItemClasses = cn({
    [styles.chargeItem]: true,
    [styles.isSelected]: selected,
  });

  return (
    <div className={chargeItemClasses}>
      <CreditIcon width={24} height={24} />
      <span>{chargeAmount.toLocaleString()}</span>
      <Button.Radio
        id={`radio-${chargeAmount}`}
        name="charge-item"
        onClick={handleClick}
      />
    </div>
  );
}
