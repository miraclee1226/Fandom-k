import styles from "components/Image/RoundImage/RoundImage.module.scss";
import IdolImg from "assets/Image_Idol.png";
import classNames from "classnames/bind";

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