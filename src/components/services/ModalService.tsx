import { useTranslate } from '../../utils/translate';
import scss from './ModalService.module.scss'
import close from '../../assets/images/close_small.png'
import React from 'react';

interface ChildProps {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalService:React.FC<ChildProps> = ({isShow,setIsShow}) => {
    const show = () => setIsShow(!isShow);
    const {t} = useTranslate()

    return (
        <div id={scss.Modal}>
            <div className="container">
                <div className={scss.modal}>
                    <h2>{t("Вызов мастера – быстрое решение вашей проблемы!","Устатты чакыруу – сиздин маселеңизди бат чечүү!","Calling a master – a quick solution to your problem!")}</h2>
                    <button className={scss.close} onClick={show}> <img src={close} alt="close" /> </button>
                    <div className={scss.block}>
                        <div className={scss.left}>
                            <h3>{t(
                                "С нами вы экономите время и получаете гарантированное качество услуг. Оставьте заявку прямо сейчас!",
                                "Биз менен сиз убактыңызды үнөмдөйсүз жана кызматтардын кепилденген сапатын аласыз. Заявкаңызды азыр эле калтырыңыз!",
                                "With us, you save time and receive guaranteed quality of services. Submit your request right now!"
                            )}</h3>
                            <p>{t(
                                "Не откладывайте решение важных задач! Заполните простую форму ниже, и наш оператор свяжется с вами в течение нескольких минут. Мы подберем подходящего мастера, который приедет в удобное для вас время и решит вашу проблему профессионально и качественно.",
                                "Маанилүү маселелерди чечүүнү кийинкиге калтырбаңыз! Төмөндө жөнөкөй форманы толтуруңуз, жана биздин оператор сиз менен бир нече мүнөттүн ичинде байланышат. Биз сизге ыңгайлуу убакытта келе турган жана маселеңизди кесипкөйлүк менен чечип бере турган тийиштүү устаны тандап беребиз.",
                                "Don't postpone solving important tasks! Fill out the simple form below, and our operator will contact you within a few minutes. We will select the right specialist who will arrive at a convenient time for you and resolve your issue professionally and efficiently."    
                            )}</p>
                        </div>
                        <div className={scss.right}>
                            <form action="" method="post">
                                <input type="text" placeholder={t("Ваше имя","Сиздин атыңыз","Your name")} />
                                <input type="text" placeholder={t("Номер телефона","Телефон номери","Phone number")}/>
                                <textarea name="comment" id="comment" placeholder={t("Опишите свою проблему","Маселеңизди сүрөттөгүңүз","Describe your problem")}></textarea>
                                <button onClick={show}>{t("Вызвать мастера","Мастерди чакыруу","Call a specialist")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalService;