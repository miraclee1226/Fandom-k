import styles from "./RectangleImage.module.scss";

export default function RectangleImage({ src, alt }) {
  return (
    <div className={styles.rectangleImage}>
      <img src={src} alt={alt} />
    </div>
  );
}
