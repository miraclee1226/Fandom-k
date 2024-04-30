import { useState } from "react";
import styles from "../Button.module.scss";
import { ReactComponent as RadioIcon } from "assets/icons/radio.svg";

const DEFAULT_FILL = "#8C92AB";

export default function RadioButton({ onClick = () => {} }) {
  const [fill, setFill] = useState(DEFAULT_FILL);

  const handleClick = () => {
    if (fill === DEFAULT_FILL) setFill("var(--brand-orange)");
    else setFill(DEFAULT_FILL);

    onClick();
  };

  return (
    <div className={styles.radioButton}>
      <RadioIcon fill={fill} onClick={handleClick} />
    </div>
  );
}
