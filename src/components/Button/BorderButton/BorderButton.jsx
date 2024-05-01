import styles from "../Button.module.scss";

export default function BorderButton({ children, onClick, className }) {
  return (
    <button className={`${styles.borderButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
