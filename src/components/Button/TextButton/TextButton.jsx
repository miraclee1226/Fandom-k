import styles from "../Button.module.scss";

export default function TextButton({ children, onClick, className = "" }) {
  return (
    <button className={`${styles.textButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
