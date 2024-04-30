import styles from "./Button.module.scss";

export default function DefaultButton({ children, onClick }) {
  return (
    <button className={styles.defaultButton} onClick={onClick}>
      {children}
    </button>
  );
}
