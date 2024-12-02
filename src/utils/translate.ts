import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { useDispatch } from "react-redux"
import { setLanguage } from "../redux/slices/languageSlice"

export const useTranslate = () => {
    const {currentLanguage} = useSelector((state: RootState) => state.language)
    const dispatch = useDispatch<AppDispatch>()
    const t = (ru: string, ky:string, en: string) => {
        switch (currentLanguage) {
            case "ru":
                return ru
            case "ky":
                return ky
            case "en":
                return en
            default:
                return ru
        }
    }

    const changeLanguage = (lang: string) => {
        dispatch(setLanguage(lang))
        localStorage.setItem("lang", lang)
    }

    return {t,changeLanguage}
}