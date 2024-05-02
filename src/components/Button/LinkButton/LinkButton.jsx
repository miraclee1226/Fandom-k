import { Link } from "react-router-dom";
import DefaultButton from "../Button";

export default function LinkButton({ to, ...rest }) {
  return (
    <Link to={to}>
      <DefaultButton {...rest}></DefaultButton>
    </Link>
  );
}
