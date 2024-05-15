import React, { createContext, useContext } from "react";
import classNames from "classnames/bind";
import styles from "components/TouchArea/TouchArea.module.scss";

const TouchAreaContext = createContext();

/**
 * @returns TouchAreaProvider의 값인 Component를 반환합니다.
 * @description Touch Area Hook
 */

export const useTouchArea = () => {
  return useContext(TouchAreaContext);
};

const cn = classNames.bind(styles);

/**
 * @param {component} component - component 입력란입니다.
 * @param {size} size - size 입력란입니다.
 * @description component와 size를 전달받아 TouchArea를 생성합니다.
 */

export function TouchAreaProvider({ children }) {
  const TouchArea = ({ component, size = "md" }) => {
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

  return (
    <TouchAreaContext.Provider value={{ TouchArea }}>
      {children}
    </TouchAreaContext.Provider>
  );
}
