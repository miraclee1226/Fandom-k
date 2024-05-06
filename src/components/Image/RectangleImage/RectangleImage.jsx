import styles from "components/Image/Image.module.scss";
import IdolImg from "assets/Image_Idol.png";

export default function RectangleImage() {
  return (
    <div className={styles.rectangleImage}>
      <img src={IdolImg} alt="채원 이미지" />
    </div>

    // SupportCard img 변경 후 주석 해제
    // <div className={styles.rectangleImage}>
    // {lazyMode ? (
    //   <WebpLoader.Lazy src={src} webpSrc={src} />
    // ) : (
    //   <WebpLoader src={src} webpSrc={src} />
    // )}
    // </div>
  );
}

