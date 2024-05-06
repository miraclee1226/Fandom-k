import { useState } from "react";
import classNames from "classnames/bind";
import Button from "components/Button";
import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const cn = classNames.bind(styles);

const CHARGE_AMOUNTS = [100, 500, 1000];

export default function CreditChargeModal({ isOpen, handleModalOpen }) {
  const [checkedValue, setCheckedValue] = useState("");

  const handleRadioChange = (e) => {
    setCheckedValue(e.target.value);
  };

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
          {CHARGE_AMOUNTS.map((chargeAmount) => (
            <ChargeItem
              key={chargeAmount}
              chargeAmount={chargeAmount}
              checkedValue={checkedValue}
              handleRadioChange={handleRadioChange}
            />
          ))}
        </div>

        <div className={styles.footer}>
          <Button onClick={handleChargeCredit}>충전하기</Button>
        </div>
      </div>
    </DefaultModal>
  );
}

function ChargeItem({ chargeAmount, checkedValue, handleRadioChange }) {
  const chargeItemClasses = cn({
    [styles.chargeItem]: true,
    [styles.isChecked]: checkedValue === String(chargeAmount),
  });

  return (
    <div className={chargeItemClasses}>
      <CreditIcon width={24} height={24} />
      <span>{chargeAmount.toLocaleString()}</span>
      <Button.Radio
        id={`radio-${chargeAmount}`}
        name="charge-item"
        value={String(chargeAmount)}
        checkedValue={checkedValue}
        onChange={handleRadioChange}
      />
    </div>
  );
}
