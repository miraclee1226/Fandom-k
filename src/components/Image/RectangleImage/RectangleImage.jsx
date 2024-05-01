import styles from "./RectangleImage.module.scss";
import IdolImg from "../../../assets/Image_Idol.png";

export default function RectangleImage() {
  return (
    <div className={styles.rectangleImage}>
      <img src={IdolImg} alt="르세라핌 채원 이미지" />
    </div>
  );
}
