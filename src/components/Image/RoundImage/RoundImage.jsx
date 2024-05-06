import IdolImg from "assets/Image_Idol.png";
import styles from "../Image.module.scss";

export default function RoundImage() {
  return (
    <div className={styles.roundImage}>
      <img src={IdolImg} alt="르세라핌 채원 이미지" />
    </div>
  );
}
