import useLazyImageObserver from "hooks/useLazyImageObserver";

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

  return (
    <picture>
      {webpSrc && <source srcSet={imgSrc} type="image/webp" alt={alt} />}
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        onError={(event) => {
          event.target.src = "https://via.placeholder.com/200/cccccc/cccccc";
          event.onerror = null;
        }}
      />
    </picture>
  );
}

WebpLoader.Lazy = LazyModeWebpLoader;
