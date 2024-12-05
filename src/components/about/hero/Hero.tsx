import { useTranslate } from '../../../utils/translate';
import scss from './Hero.module.scss';
import heroImg from "../../../assets/images/hero.jpg"
const Hero = () => {

    const {t} = useTranslate()

    return (
        <section id={scss.Hero}>
            <div className="container">
                <div className={scss.hero}>
                    <div className={scss.left}>
                        <h2>{t("О нашей компании","Биздин компания жөнүндө","About our company")}</h2>

                        <div>
                            <h3>{t("10 лет опыта в решении технических задач","ехникалык маселелерди чечүүдө 10 жылдык тажрыйба","0 years of experience in solving technical tasks")}</h3>
                            <p className={scss.descr}>
                                {t(
                                    "Наша компания работает на рынке более 10 лет, предоставляя полный спектр услуг для частных домов, квартир и коммерческих помещений. Мы успешно выполнили тысячи заказов: от мелкого бытового ремонта до сложных сварочных и электромонтажных работ.",
                                    "Биздин компания рынокто 10 жылдан ашык убакыт иштеп, жеке үйлөр, батирлер жана коммерциялык жайлар үчүн кызматтардын толук спектрин сунуштап келет. Биз миңдеген буйрутмаларды ийгиликтүү аткардык: майда тиричилик оңдоолорунан тартып, татаал ширетүү жана электр орнотуу иштерине чейин.",
                                    "Our company has been operating in the market for over 10 years, providing a full range of services for private homes, apartments, and commercial premises. We have successfully completed thousands of orders, from minor household repairs to complex welding and electrical installation work."
                                )}
                            </p>
                        </div>
                    </div>
                    <img src={heroImg} alt="hero banner" />
                </div>
            </div>
        </section>
    );
};

export default Hero;