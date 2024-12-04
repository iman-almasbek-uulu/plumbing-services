import { useSelector } from "react-redux";
import { useTranslate } from "../../../utils/translate";
import { Button } from "../../ui/Button";
import scss from "./Header.module.scss";
import { RootState } from "../../../redux/store";
import logo from "../../../assets/images/lo.png";

const Header = () => {
  const { t, changeLanguage } = useTranslate();
  const language = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.Logo}>
            <img className={scss.logoImg} src={logo} alt="" />
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
            {t("", "", "")}
          </div>
          <div className={scss.content}>
            <a>{t("Главная", "Башкы бет", "Home")}</a>
            <a>{t("О нас", "Биз жөнүндө", "About Us")}</a>
            <a>{t("Услуги", "Кызматтар", "Services")}</a>
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
