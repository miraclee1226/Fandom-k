import classNames from "classnames/bind";
import arrowLeft from "assets/icons/arrow-left.svg";
import arrowRight from "assets/icons/arrow-right.svg";
import styles from "../Button.module.scss";

const cn = classNames.bind(styles);

export default function ArrowButton({ direction, onClick, size = "md" }) {
  const buttonClasses = cn({
    [styles.arrowButton]: true,
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {direction === "left" ? (
        <img src={arrowLeft} alt="arrow-left" />
      ) : (
        <img src={arrowRight} alt="arrow-right" />
      )}
    </button>
  );
}
