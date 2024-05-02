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
    padding: 0,
    color: "white",
    boxShadow: "0px 4px 4px 0px #00000040",
    borderRadius: "8px",
  },
};

export default function DefaultModal({ children, isOpen, handleModalOpen }) {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => handleModalOpen(false)}
        style={customStyles}
        contentLabel="modal"
      >
        {children}
      </ReactModal>
    </>
  );
}
