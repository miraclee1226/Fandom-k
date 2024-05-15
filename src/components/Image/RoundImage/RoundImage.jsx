import { useState, useEffect } from "react";
import styles from "components/Image/Image.module.scss";
import WebpLoader from "components/WebpLoader";

export default function RoundImage({ src, alt, lazyMode = false }) {
  let webpSrc = null;

  if (src.endsWith(".webp")) {
    webpSrc = src;
  }

  return (
    <div className={styles.roundImage}>
      {lazyMode ? (
        <WebpLoader.Lazy src={src} webpSrc={webpSrc} alt={alt} />
      ) : (
        <WebpLoader src={src} webpSrc={webpSrc} alt={alt} />
      )}
    </div>
  );
}
