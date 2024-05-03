import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cn = classNames.bind(styles);

export default function DefaultButton({
  children,
  onClick,
  size = "md",
  disabled = false,
  className,
}) {
  const buttonClasses = cn({
    [styles.defaultButton]: true,
    [styles.sm]: size === "sm",
    [styles.md]: size === "md",
    [styles.disabled]: disabled,
  });

  return (
    <button
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}