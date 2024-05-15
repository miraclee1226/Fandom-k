import classNames from "classnames/bind";
import styles from "./Layout.module.scss";

const cn = classNames.bind(styles);

export default function Layout({ children, page }) {
  const pageClasses = cn({
    [styles.view]: true,
    [styles.myPage]: page === "myPage",
  })

  return <div className={pageClasses}>{children}</div>;
}
