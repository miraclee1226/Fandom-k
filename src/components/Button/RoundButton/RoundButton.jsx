import styles from "../Button.module.scss";

export default function RoundButton({
  children,
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <>
      <button
        className={`${styles.roundButton} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}

