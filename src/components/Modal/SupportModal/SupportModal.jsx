import { useState } from "react";
import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import { addCommas, removeCommas } from "utils/commas";
import Button from "components/Button";
import idolImg from "assets/Image_Idol.png";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const ERROR_MSG = "갖고 있는 크레딧보다 더 많이 후원할 수 없어요";

export default function SupportModal({ isOpen, handleModalOpen }) {
  const [creditAmount, setCreditAmount] = useState(0);
  const [error, setError] = useState(false);

  const handleInputChange = (value) => {
    setCreditAmount(value);
  };

  const handleSupport = () => {
    // TODO: Support 충전 핸들러
    handleModalOpen(false);
  };

  return (
    <DefaultModal isOpen={isOpen} handleModalOpen={handleModalOpen}>
      <div className={styles.supportModal}>
        <div className={styles.header}>
          후원하기
          <XIcon
            className={styles.xIcon}
            opacity={0.5}
            onClick={() => handleModalOpen(false)}
          />
        </div>

        <div className={styles.main}>
          <img src={idolImg} alt="main-img" width={158} height={206} />
          <div className={styles.titleContainer}>
            <span className={styles.title}>강남역 광고</span>
            <span className={styles.subTitle}>민지 2023 첫 광고</span>
          </div>
          <div className={styles.inputContainer}>
            <NumberInput
              className={error ? styles.error : undefined}
              handleInputChange={handleInputChange}
              placeholder="크레딧 입력"
            />
            <CreditIcon className={styles.creditIcon} width={30} height={30} />
          </div>

          {error && <div className={styles.error}>{ERROR_MSG}</div>}
        </div>

        <div className={styles.footer}>
          <Button
            className={styles.confirmBtn}
            onClick={handleSupport}
            disabled={error || !creditAmount}
          >
            후원하기
          </Button>
        </div>
      </div>
    </DefaultModal>
  );
}

function NumberInput({ placeholder, handleInputChange, className }) {
  const [formattedNumber, setFormatteNumber] = useState("");

  const handleChange = (e) => {
    const value = removeCommas(e.target.value);

    if (!/^\d{0,16}$/gm.test(value)) return;
    if (value === "") setFormatteNumber("");
    else setFormatteNumber(addCommas(+value));

    handleInputChange(Number(removeCommas(value)));
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={formattedNumber}
      onChange={handleChange}
      className={className}
    />
  );
}
