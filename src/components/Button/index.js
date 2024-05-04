import ArrowButton from "./ArrowButton/ArrowButton";
import BorderButton from "./BorderButton";
import DefaultButton from "./Button";
import LinkButton from "./LinkButton";
import RadioButton from "./RadioButton";
import RoundButton from "./RoundButton";
import TextButton from "./TextButton";

const Button = Object.assign({
  Border: BorderButton,
  Arrow: ArrowButton,
  Round: RoundButton,
  Radio: RadioButton,
  Text: TextButton,
  Link: LinkButton,
});

export default Button;
