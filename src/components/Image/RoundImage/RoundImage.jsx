import { useState, useEffect } from "react";
import styles from "components/Image/Image.module.scss";
import WebpLoader from "components/WebpLoader";

export default function RoundImage({ src, lazyMode = false }) {
  let webpSrc = null;

  if (src.endsWith(".webp")) {
    webpSrc = src;
  }

  return (
    <div className={styles.roundImage}>
      {lazyMode ? (
        <WebpLoader.Lazy src={src} webpSrc={webpSrc} />
      ) : (
        <WebpLoader src={src} webpSrc={webpSrc} />
      )}
    </div>
  );
}
