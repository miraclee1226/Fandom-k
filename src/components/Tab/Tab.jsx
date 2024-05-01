import { useState } from "react";
import cn from 'classnames';
import styles from "./Tab.module.scss";

export default function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = ["이달의 여자 아이돌", "이달의 남자 아이돌"];

  return (
    <div>
      <ul className={styles.tabContainer}>
        {menuArr.map((menu, index) => (
          <li
            key={index}
            className={cn(styles.tab, { [styles.tabFocused]: index === currentTab })}
            onClick={() => setCurrentTab(index)}
          >
            {menuArr[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}
