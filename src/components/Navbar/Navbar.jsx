import { useNavigate } from "react-router-dom";
import logo from "assets/logo.png";
import profile from "assets/profile.png";
import styles from "components/Navbar/Navbar.module.scss";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div></div>
      <img
        className={styles.navbarLogo}
        onClick={() => {
          navigate("/list");
        }}
        src={logo}
        alt="로고"
      />
      <img
        className={styles.navbarProfile}
        onClick={() => navigate("/mypage")}
        src={profile}
        alt="프로필"
      />
    </nav>
  );
};

export default Navbar;
