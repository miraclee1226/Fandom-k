import { useEffect, useRef, useState } from "react";
import styles from "../Button.module.scss";
import { ReactComponent as RadioIcon } from "../../../assets/icons/radio.svg";

const DEFAULT_FILL = "#8C92AB";

export default function RadioButton({
  id,
  name,
  value = "",
  checkedValue,
  onChange,
}) {
  const [fill, setFill] = useState(DEFAULT_FILL);

  useEffect(() => {
    if (checkedValue === value) setFill("var(--brand-orange)");
    else setFill(DEFAULT_FILL);
  }, [checkedValue]);

  return (
    <>
      <label className={styles.radioButton}>
        <RadioIcon fill={fill} />
        <input
          id={id}
          name={name}
          type="radio"
          value={value}
          checked={checkedValue === value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
