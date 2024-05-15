import useLazyImageObserver from "hooks/useLazyImageObserver";
import defaultImg from "assets/default_image.png";

export default function WebpLoader({ src, webpSrc, alt }) {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" alt={alt} />}
      <img
        src={src}
        alt={alt}
        onError={(event) => {
          event.target.src = "https://via.placeholder.com/200/cccccc/cccccc";
          event.onerror = null;
        }}
      />
    </picture>
  );
}

function LazyModeWebpLoader({ src, webpSrc, alt }) {
  const { imgRef, imgSrc } = useLazyImageObserver({ src: webpSrc || src });

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <picture>
      {webpSrc && <source srcSet={imgSrc} type="image/webp" alt={alt} />}
      <img ref={imgRef} src={imgSrc} alt={alt} onError={handleImgError} />
    </picture>
  );
}

WebpLoader.Lazy = LazyModeWebpLoader;
