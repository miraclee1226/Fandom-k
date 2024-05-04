import styles from "../Button.module.scss";

export default function RoundButton({ children, onClick, className = "" }) {
  return (
    <>
      <button
        className={`${styles.roundButton} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
