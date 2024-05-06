import React from "react";
import classNames from "classnames/bind";
import styles from "./TouchArea.module.scss";

const cn = classNames.bind(styles);

export default function TouchArea({ size = "md", children }) {
  const touchAreaClasses = cn({
    [styles.touchArea]: true,
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
  });

  return <div className={touchAreaClasses}>{children}</div>;
}
