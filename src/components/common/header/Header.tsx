import { useTranslate } from "../../../utils/translate";
import scss from "./Header.module.scss"

const Header = () => {
    const {t,changeLanguage} = useTranslate();

    
    


    return (
        <header id={scss.Header}>
            <div className="container">
                <select onChange={(e) => changeLanguage(e.target.value)} name="language" id="language">
                    <option value="ru">ru</option>
                    <option value="ky">ky</option>
                    <option value="en">en</option>  
                </select>
            </div>  
        </header>
    );
};
export default Header;