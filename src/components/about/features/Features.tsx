import { useTranslate } from '../../../utils/translate';
import scss from './Features.module.scss';

const Features = () => {

    const {t} = useTranslate()

    let arr = [
        {
            id: 1,
            title: {
                ru: "Оперативность",
                ky: "Ыкчамдык",
                en: "Efficiency"
            },
            descr:{
                ru: "Выезд мастера в течение 1 часа с момента заявки.",
                ky: "Суроо-талап берилген учурдан тартып 1 сааттын ичинде устанын чыгуусу.",
                en: "A specialist will arrive within 1 hour of the request."
            }
        },
        {
            id: 2,
            title: {
                ru: "Прозрачные цены",
                ky: "Тунук баалар",
                en: "Transparent prices"
            },
            descr:{
                ru: "Фиксированная стоимость без скрытых доплат.",
                ky: "Жашыруун кошумча төлөмдөрсүз бекитилген баа.",
                en: "Fixed cost with no hidden charges."
            }
        },
        {
            id: 3,
            title: {
                ru: "Прозрачные цены",
                ky: "Тунук баалар",
                en: "Transparent prices"
            },
            descr:{
                ru: "Фиксированная стоимость без скрытых доплат.",
                ky: "Жашыруун кошумча төлөмдөрсүз бекитилген баа.",
                en: "Fixed cost with no hidden charges."
            }
        },
        {
            id: 4,
            title: {
                ru: "Прозрачные цены",
                ky: "Тунук баалар",
                en: "Transparent prices"
            },
            descr:{
                ru: "Фиксированная стоимость без скрытых доплат.",
                ky: "Жашыруун кошумча төлөмдөрсүз бекитилген баа.",
                en: "Fixed cost with no hidden charges."
            }
        },
        {
            id: 5,
            title: {
                ru: "Прозрачные цены",
                ky: "Тунук баалар",
                en: "Transparent prices"
            },
            descr:{
                ru: "Фиксированная стоимость без скрытых доплат.",
                ky: "Жашыруун кошумча төлөмдөрсүз бекитилген баа.",
                en: "Fixed cost with no hidden charges."
            }
        },
    ]


    return (
        <section id={scss.Features}>
            <div className="container">
                <div className={scss.features}>
                    <h2>{t("Почему выбирают нас?","Неге бизди тандайсыз?","Why choose us?")}</h2>
                    <p className={scss.text}>{
                        t(
                            "Мы понимаем, насколько важно быстро и качественно решать бытовые и технические задачи. Вот почему наши клиенты выбирают нас снова и снова:",
                            "Биз үй тиричилиги жана техникалык маселелерди ыкчам жана сапаттуу чечүүнүн маанилүүлүгүн жакшы түшүнөбүз. Ошондуктан биздин кардарлар бизди кайрадан жана кайрадан тандашат:",
                            "We understand how important it is to solve household and technical tasks quickly and efficiently. That’s why our clients choose us again and again:"
                        )
                    }</p>

                    <div className={scss.list}>
                        {arr.map((el,i) => <div key={i} className={scss.item}>
                            <div className={scss.num}>{"0"+(i+1)}</div>
                            <h4>
                                {t(
                                    el.title.ru,
                                    el.title.ky,
                                    el.title.en
                                )}
                            </h4>
                            <p className={scss.descr}>
                                {t(
                                    el.descr.ru,
                                    el.descr.ky,
                                    el.descr.en                                    
                                )}
                            </p>
                        </div>)}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
