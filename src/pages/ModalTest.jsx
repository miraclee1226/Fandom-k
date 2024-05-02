import Button from "components/Button";
import { useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#181d26",
    border: "none",
    borderRadius: "12px",
  },
};

export default function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="modal"
      >
        hello
      </ReactModal>
    </>
  );
}
