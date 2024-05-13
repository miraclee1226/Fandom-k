import useResponsive from "hooks/useResponsive";
import styles from "../Skeleton.module.scss";

export default function AddFavoriteSkeleton({ isMobile = false }) {
  return (
    <div className={styles.addFavoriteSkeleton}>
      {isMobile ? <MobileSkeleton /> : <TabletAndPCSkeleton />}
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

function TabletAndPCSkeleton() {
  const [isPC] = useResponsive();

  return (
    <div className={styles.notMobile}>
      {Array.from({ length: isPC ? 16 : 8 }).map((_, idx) => (
        <div key={idx} className={styles.idol}>
          <div className={styles.profile} />
          <div className={styles.name} />
          <div className={styles.group} />
        </div>
      ))}
    </div>
  );
}
