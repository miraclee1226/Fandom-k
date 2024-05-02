import { ReactComponent as CreditIcon } from "assets/icons/credit.svg";
import { ReactComponent as XIcon } from "assets/icons/x_icon.svg";
import Button from "components/Button";
import DefaultModal from "../Modal";
import styles from "../Modal.module.scss";

export default function CreditWarningModal({ isOpen, handleModalOpen }) {
  return (
    <DefaultModal isOpen={isOpen} handleModalOpen={handleModalOpen}>
      <div className={styles.creditWarningModal}>
        <div className={styles.header}>
          <XIcon
            className={styles.xIcon}
            opacity={0.5}
            onClick={() => handleModalOpen(false)}
          />
        </div>

        <div className={styles.main}>
          <CreditIcon width={113} height={113} />
          <span>
            앗! 투표하기 위한 <span>크레딧</span>이 부족해요
          </span>
        </div>

        <div className={styles.footer}>
          <Button
            className={styles.confirmBtn}
            onClick={() => handleModalOpen(false)}
          >
            확인
          </Button>
        </div>
      </div>
    </DefaultModal>
  );
}
