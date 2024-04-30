import styles from "../Button.module.scss";

// TODO: Button 기본 props 설정  / index.scss

export default function BorderButton({ children, onClick, className }) {
  return (
    <button className={`${styles.borderButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
