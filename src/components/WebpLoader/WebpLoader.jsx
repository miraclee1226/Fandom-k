import useLazyImageObserver from "hooks/useLazyImageObserver";

export default function WebpLoader({ src, webpSrc }) {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img src={src} />
    </picture>
  );
}

function LazyModeWebpLoader({ src, webpSrc }) {
  const { imgRef, imgSrc } = useLazyImageObserver({ src: webpSrc && src });
  
  return (
    <picture>
      {webpSrc && <source srcSet={imgSrc} type="image/webp" />}
      <img ref={imgRef} src={imgSrc} />
    </picture>
  );
}

WebpLoader.Lazy = LazyModeWebpLoader;
