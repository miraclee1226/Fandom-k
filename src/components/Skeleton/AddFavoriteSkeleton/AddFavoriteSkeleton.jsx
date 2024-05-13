import styles from "../Skeleton.module.scss";

export default function AddFavoriteSkeleton({ isMobile = false }) {
  return (
    <div className={styles.addFavoriteSkeleton}>
      {isMobile ? <MobileSkeleton /> : null}
    </div>
  );
}

function MobileSkeleton() {
  return (
    <div className={styles.mobile}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className={styles.idol}>
          <div className={styles.profile} />
          <div className={styles.name} />
          <div className={styles.group} />
        </div>
      ))}
    </div>
  );
}
