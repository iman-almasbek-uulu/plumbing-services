import { useSelector } from "react-redux";
import { useTranslate } from "../../../utils/translate";
import { Button } from "../../ui/Button";
import scss from "./Header.module.scss";
import { RootState } from "../../../redux/store";
import logo from "../../../assets/images/lo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { t, changeLanguage } = useTranslate();
  const language = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.Logo}>
            <img className={scss.logoImg} src={logo} alt="Logo" />
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={language}
              name="language"
              id="language"
            >
              <option value="ru">ru</option>
              <option value="ky">ky</option>
              <option value="en">en</option>
            </select>
          </div>

          <div className={scss.burgerMenu} onClick={toggleMenu}>
            <div className={scss.burgerIcon}></div>
            <div className={scss.burgerIcon}></div>
            <div className={scss.burgerIcon}></div>
          </div>

          <div className={`${scss.content} ${menuOpen ? scss.menuOpen : ""}`}>
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
              to="/services"
              className={({ isActive }) =>
                `${scss.navLink} ${isActive ? scss.active : ""}`
              }
            >
              {t("Услуги", "Кызматтар", "Services")}
            </NavLink>
            <Button>{t("Вызвать мастера", "Чакыруу", "Call Master")}</Button>
          </div>
        </div>
      </div>

      <div
        className={`${scss.modalMenu} ${menuOpen ? scss.open : ""}`}
      >
        <div className={scss.modalContent}>
    
          <button className={scss.closeButton} style={{width:"20px",border:"none",background:"white"}} onClick={closeMenu}>X</button>

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
            to="/services"
            className={({ isActive }) =>
              `${scss.navLink} ${isActive ? scss.active : ""}`
            }
          >
            {t("Услуги", "Кызматтар", "Services")}
          </NavLink>

          
          <div className={scss.Logo}>
            <select style={{border:"none",background:"white"}}
              onChange={(e) => changeLanguage(e.target.value)}
              value={language}
              name="language"
              id="language"
            >
              <option value="ru">ru</option>
              <option value="ky">ky</option>
              <option value="en">en</option>
            </select>
          </div>
        </div>
      </div>

      <div
        className={`${scss.overlay} ${menuOpen ? scss.showOverlay : ""}`}
        onClick={closeMenu}  
      ></div>
    </header>
  );
};

export default Header;
