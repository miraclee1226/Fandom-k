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

export default function DefaultModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="modal"
      >
        {children}
      </ReactModal>
    </>
  );
}
