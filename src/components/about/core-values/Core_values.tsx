import scss from './Core_values.module.scss';
import manImg from "../../../assets/images/man.jpg"
import { useTranslate } from '../../../utils/translate';
const Core_values = () => {

    const {t} = useTranslate()

    return (
        <section id={scss.Core_values}>
            <div className="container">
                <div className={scss.core_values}>
                    <div className={scss.left}>
                        <h2>{t("Честность, качество и ответственность – наш приоритет","Честность, сапат жана жоопкерчилик – биздин приоритетибиз.", "Honesty, quality, and responsibility are our priorities.")}</h2>
                        <p className={scss.descr}>
                            {t(
                                "Если вам нужны качественные услуги сантехников, электриков, слесарей или сварщиков, наша команда – ваш надежный партнер. Позвоните нам или оставьте заявку, и мы быстро свяжемся с вами для обсуждения всех деталей!",
                                "Эгерде сизге сантехниктердин, электрчilerin, слесарлардын же ширетүүчүлөрдүн сапаттуу кызматтары керек болсо, биздин команда – сиздин ишенимдүү өнөктөшүңүз. Бизге чалып же арыз калтырыңыз, биз жакын арада сиз менен байланышып, бардык деталдарды талкуулайбыз!",
                                "If you need quality services from plumbers, electricians, locksmiths, or welders, our team is your reliable partner. Call us or leave a request, and we will contact you quickly to discuss all the details!"
                            )}
                        </p>
                        <p className={scss.descr}>
                            {t(
                                "Мы предоставляем услуги сантехников, электриков, слесарей и сварщиков. Каждый наш мастер – это специалист с многолетним опытом, который знает свое дело и работает с современными инструментами и материалами. Вы можете доверить нам:",
                                "Эгерде сизге сантехниктердин, электрчilerin, слесарлардын же ширетүүчүлөрдүн сапаттуу кызматтары керек болсо, биздин команда – сиздин ишенимдүү өнөктөшүңүз. Бизге чалып же арыз калтырыңыз, биз жакын арада сиз менен байланышып, бардык деталдарды талкуулайбыз!",
                                "If you need quality services from plumbers, electricians, locksmiths, or welders, our team is your reliable partner. Call us or leave a request, and we will contact you quickly to discuss all the details!"
                            )}
                        </p>
                        <ul>
                            <li>{t(
                                "Устранение аварийных ситуаций.",
                                "Авариялык кырдаалдарды жоюу.",
                                "Emergency situation resolution."
                            )}</li>
                            <li>{t(
                                "Установку и ремонт сантехники.",
                                "Сантехниканы орнотуу жана оңдоо.",
                                "Installation and repair of plumbing."
                            )}</li>
                            <li>{t(
                                "Монтаж и настройку электрических систем.",
                                "Электр системаларын орнотуу жана жөнгө салуу.",
                                "Installation and setup of electrical systems."
                            )}</li>
                            <li>{t(
                                "Сварку и изготовление металлических конструкций.",
                                "Ширетүү жана металл конструкцияларын даярдоо.",
                                "Welding and fabrication of metal structures."
                            )}</li>
                            <li>{t(
                                "Мелкие бытовые работы и обслуживание помещений.",
                                "Майда тиричилик иштерин жана жайларды тейлөө.",
                                "Minor household tasks and facility maintenance."
                            )}</li>
                        </ul>

                    </div>
                    <img src={manImg} alt="man" />
                </div>
            </div>
        </section>
    );
};

export default Core_values;