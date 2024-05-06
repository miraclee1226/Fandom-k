import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import profile from "assets/profile.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div></div>
      <Link to="/list">
        <img className={styles.navbarLogo} src={logo} alt="로고" />
      </Link>

      <Link to="/mypage">
        <img className={styles.navbarProfile} src={profile} alt="프로필" />
      </Link>
    </nav>
  );
};

export default Navbar;
