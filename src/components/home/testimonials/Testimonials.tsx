import { useTranslate } from "../../../utils/translate";
import scss from "./Testimonials.module.scss"

type objType = {
    id: number | string,
    name: string,
    descr: string
}

const Testimonials = () => {

    const {t} = useTranslate()

    const obj: objType = {
        id: 0,
        name: "iman",
        descr: "Мастер приехал через 40 минут, устранил протечку за 20 минут. Очень доволен!"
    }

    const arr: objType[] = Array.from({length: 8}, (_,i) => ({
        id: i,
        name: obj.name,
        descr: obj.descr
    }))

    return (
        <section id={scss.Testimonials}>
            <div className="container">
                <h2>{t("Отзывы наших клиентов","Кардарларыбыздын пикирлери","Reviews from our clients")}</h2>
            </div>
            <div className={scss.testimonials}>
                {arr.map((el,i) => (
                    <div key={i}  className={scss.item}>
                        <div className={scss.name}>{el.name}</div>
                        <div className={scss.descr}>{el.descr}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;