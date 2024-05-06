import styles from "components/Image/Image.module.scss";
import IdolImg from "assets/Image_Idol.png";

export default function RoundImage() {
  return (
    <div className={styles.roundImage}>
      <img src={IdolImg} alt="르세라핌 채원 이미지" />
    </div>
  );
}
