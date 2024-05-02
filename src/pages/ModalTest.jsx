import Button from "components/Button";
import Modal from "components/Modal";
import { useState } from "react";

export default function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = (boolean) => {
    setIsOpen(boolean);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      {/* <Modal.CreditWarning isOpen={isOpen} handleModalOpen={handleModalOpen} /> */}
      <Modal.CreditCharge isOpen={isOpen} handleModalOpen={handleModalOpen} />
    </>
  );
}
