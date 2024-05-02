import ArrowButton from "./ArrowButton/ArrowButton";
import BorderButton from "./BorderButton";
import DefaultButton from "./Button";
import RadioButton from "./RadioButton";
import RoundButton from "./RoundButton";
import TextButton from "./TextButton";

const Button = Object.assign(DefaultButton, {
  Border: BorderButton,
  Arrow: ArrowButton,
  Round: RoundButton,
  Radio: RadioButton,
  Text: TextButton,
});

export default Button;
