import { NavLink } from "react-router-dom";
import { useTranslate } from "../../utils/translate";
import scss from "./ui.module.scss"
export const Button = () => {
    const {t} = useTranslate()
    return <NavLink id={scss.button} to="/service1"> {t("Вызвать мастера","Мастерди чакыруу","Call a specialist")}</NavLink>
}
