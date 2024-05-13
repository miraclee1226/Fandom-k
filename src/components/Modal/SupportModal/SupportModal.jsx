import { useState } from "react";
import { useAtom } from "jotai";
import creditAtomWithPersistence from "context/Credit";
import Button from "components/Button";
import { addCommas, removeCommas } from "utils/commas";
import useRequest from "hooks/useRequest";
import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import idolImg from "assets/Image_Idol.png";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

const ERROR_MSG = "갖고 있는 크레딧보다 더 많이 후원할 수 없어요";

export default function SupportModal({
  isOpen,
  handleModalOpen,
  content,
  handleUpdate,
}) {
  const [credit, setCredit] = useAtom(creditAtomWithPersistence);
  const [creditAmount, setCreditAmount] = useState(0);
  const [error, setError] = useState(false);
  const { requestFunc: supportIdol } = useRequest({
    skip: true,
    options: {
      method: "put",
      url: `/donations/${content?.id}/contribute`,
      data: {
        amount: creditAmount,
      },
    },
  });

  const handleInputChange = (value) => {
    if (value > credit) {
      setError(true);
    } else {
      setError(false);
      setCreditAmount(value);
    }
  };

  const handleSupport = () => {
    // TODO: Support 충전 핸들러
    supportIdol();
    handleModalOpen(false);
    handleUpdate(creditAmount);
  };

  const handleModalClose = () => {
    setCreditAmount(0);
    setError(false);
  };

  return (
    <DefaultModal
      isOpen={isOpen}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
    >
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
          <img
            src={content?.idol?.profilePicture}
            alt="main-img"
            width={158}
            height={206}
          />
          <div className={styles.titleContainer}>
            <span className={styles.subTitle}>{content?.subtitle}</span>
            <strong className={styles.title}>{content?.title}</strong>
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
            disabled={error || !(creditAmount && creditAmount <= credit)}
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

    handleInputChange(+removeCommas(value));
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
