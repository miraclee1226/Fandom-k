import React from "react";
import classNames from "classnames/bind";
import styles from "components/TouchArea/TouchArea.module.scss";

const cn = classNames.bind(styles);

export default function useTouchArea({ component, size = "md" }) {
  const TouchArea = () => {
    const touchAreaClasses = cn({
      [styles.touchArea]: true,
      [styles.md]: size === "md",
      [styles.lg]: size === "lg",
    });

    const IconComponent = component;

    return (
      <div className={touchAreaClasses}>
        <button type="button">
          <IconComponent />
        </button>
      </div>
    );
  };

  return { TouchArea };
}
