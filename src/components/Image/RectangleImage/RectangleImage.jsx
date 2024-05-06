import IdolImg from "assets/Image_Idol.png";
import styles from "../Image.module.scss";

export default function RectangleImage() {
  return (
    <div className={styles.rectangleImage}>
      <img src={IdolImg} alt="채원 이미지" />
    </div>
  );
}
