import { NavLink } from "react-router-dom";
import scss from "./Footer.module.scss";
import logo from "../../../assets/images/lo.png";
import { useTranslate } from "../../../utils/translate";

const Footer = () => {
  const { t } = useTranslate();
  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.Logo}>
            <img className={scss.logoImg} src={logo} alt="Logo" />
          </div>

          <div className={scss.menuOpen}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${scss.navLink} ${isActive ? scss.active : ""}`
              }
            >
              {t("Главная", "Башкы бет", "Home")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${scss.navLink} ${isActive ? scss.active : ""}`
              }
            >
              {t("О нас", "Биз жөнүндө", "About Us")}
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `${scss.navLink} ${isActive ? scss.active : ""}`
              }
            >
              {t("Услуги", "Кызматтар", "Services")}
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
