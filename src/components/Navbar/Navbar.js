import { useNavigate } from "react-router-dom";
import "../../styles/Navbar.scss";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <nav className="Navbar">
        <div></div>
        <img
          className="Navbar-logo"
          onClick={() => {
            nav("/list");
          }}
          src={logo}
          alt="로고"
        />
        <img
          className="Navbar-profile"
          onClick={() => nav("/mypage")}
          src={profile}
          alt="프로필"
        />
    </nav>
  );
};

export default Navbar;

