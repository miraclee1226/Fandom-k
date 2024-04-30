import ArrowButton from "./ArrowButton/ArrowButton";
import BorderButton from "./BorderButton";
import DefaultButton from "./Button";
import RoundButton from "./RoundButton";

const Button = Object.assign(DefaultButton, {
  Border: BorderButton,
  Arrow: ArrowButton,
  Round: RoundButton,
});

export default Button;
