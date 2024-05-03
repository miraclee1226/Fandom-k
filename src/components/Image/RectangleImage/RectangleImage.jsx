import IdolImg from "assets/Image_Idol.png";
import styles from "components/Image/RectangleImage/RectangleImage.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

export default function RectangleImage({ size="md" }) {
  const rectangleImageClasses = cn({
    [styles.rectangleImage]: true,
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
  })

  return (
    <div className={rectangleImageClasses}>
      <img src={IdolImg} alt="채원 이미지" />
    </div>
  );
}
