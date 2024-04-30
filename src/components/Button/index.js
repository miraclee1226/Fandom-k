import BorderButton from "./BorderButton";
import DefaultButton from "./Button";

const Button = Object.assign(DefaultButton, {
  Border: BorderButton,
});

export default Button;
