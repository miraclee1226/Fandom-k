// import IdolImg from "assets/Image_Idol.png";
import WebpLoader from "components/WebpLoader";
import styles from "../Image.module.scss";

export default function RectangleImage({ src, alt, lazyMode = false }) {
  let webpSrc = null;
  
  if (src.endsWith(".webp")) {
    webpSrc = src;
  }
  
  return (
    <div className={styles.rectangleImage}>
    {lazyMode ? (
      <WebpLoader.Lazy src={src} webpSrc={src} alt={alt} />
    ) : (
      <WebpLoader src={src} webpSrc={src} alt={alt} />
    )}
    </div>
  );
}

