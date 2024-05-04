import classNames from "classnames/bind";
import styles from "components/Image/Image.module.scss";
import IdolImg from "assets/Image_Idol.png";

const cn = classNames.bind(styles);

export default function RoundImage({ size="md" }) {
  const roundImageClasses = cn({
    [styles.roundImage]: true,
    [styles.sm]: size === "sm",
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
  })

  return (
    <div className={roundImageClasses}>
      <img src={IdolImg} alt="르세라핌 채원 이미지" />
    </div>
  );
}