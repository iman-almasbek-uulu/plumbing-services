import { useSelector } from "react-redux";
import { useTranslate } from "../../../utils/translate";
import { Button } from "../../ui/Button";
import scss from "./Header.module.scss"
import { RootState } from "../../../redux/store";

const Header = () => {
    const {t,changeLanguage} = useTranslate();
    const language = useSelector((state: RootState) => state.language.currentLanguage)
    return (
        <header id={scss.Header}>
            <div className="container">
                <select onChange={(e) => changeLanguage(e.target.value)} value={language} name="language" id="language">
                    <option value="ru">ru</option>
                    <option value="ky">ky</option>
                    <option value="en">en</option>  
                </select>
                {t("","","")}
                <Button/>
            </div>  
        </header>
    );
};
export default Header;