import scss from './NotFoundPage.module.scss';
import notFoundImg from "../../assets/images/404 1.png"
import { useTranslate } from '../../utils/translate';
import { NavLink } from 'react-router-dom';
const NotFoundPage = () => {
    const {t} = useTranslate()
    return (
        <div id={scss.Page}>
            <img src={notFoundImg} alt="not found" />
            <div className={scss.block}>
                <h3>{t("Упс! Страница не найдена","Упс! Баракча табылган жок","Opps! Page Not Found")}</h3>
                <NavLink to="/">{t("Назад на главную","Башкы бетке кайтуу"," BACK TO HOME")}</NavLink>
            </div>
        </div>
    );
};

export default NotFoundPage;