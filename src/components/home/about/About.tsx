import { useTranslate } from "../../../utils/translate";
import scss from "./About.module.scss";

const About = () => {
  const { t } = useTranslate();
  return (
    <section id={scss.About}>
      <div className="container">
        <div className={scss.about}>
          <div className={scss.Block}>
            <div className={scss.aboutBlock}>
              <h1>{t("О нас", "Биз жонундо", "About")}</h1>
              <p>
                {t(
                  `Решаем проблемы с сантехникой качественно, надежно и по доступным ценам. Работаем круглосуточно по вашему запросу.`,
                  `Биз сантехника көйгөйлөрүн натыйжалуу, ишенимдүү жана жеткиликтүү баада чечебиз. Биз сиздин сурооңуз боюнча күнү-түнү иштейбиз.`,
                  `We solve plumbing problems efficiently, reliably and at affordable prices. We work around the clock at your request.`
                )}
              </p>
              <button>
                {t("Узнать больше", "көбүрөөк билүү", "find out more")}
              </button>
            </div>
            <div className={scss.miniBlocks}>
              <div className={scss.mini}>
                <h1>5</h1>
                <h3>{t("Лет опыта", "Жылдык опыт", " Years experience")}</h3>
              </div>
              <div className={scss.mini}>
                <h1>+8000</h1>
                <h3>
                  {t(
                    "Довольных клиентов",
                    "канааттандырылган кардарлар",
                    "Satisfied clients"
                  )}
                </h3>
              </div>
              <div className={scss.mini}>
                <h1>168</h1>
                <h3>
                  {" "}
                  {t(
                    "Высококласных и опытных мастеров",
                    " Жогорку квалификациялуу жана тажрыйбалуу усталар",
                    " Highly qualified and experienced craftsmen"
                  )}
                </h3>
              </div>
            </div>
          </div>
          <h1 className={scss.h1}>
            {t("Как мы работаем", "Биз кандай иштейбиз", "how we work")}
          </h1>
          <div className={scss.content}>
            <div className={scss.box}>
              <h1>
                {t(
                  "Принимаем вашу заявку",
                  "Биз сиздин арызыңызды кабыл алабыз",
                  "We accept your application"
                )}
              </h1>
              <p>
                {t(
                  `Вы оставляете свою заявку у нас на сайте, в течении 15 минут оператор примет и вышлет подходящего специалиста. Мастер будет у вас в течении 1 часа`,
                  `Сурамыңызды биздин сайтка калтырасыз, 15 мүнөттүн ичинде оператор кабыл алып, ылайыктуу адисти жөнөтөт. Мастер 1 сааттын ичинде сиз менен болот`,
                  `You leave your request on our website, within 15 minutes the operator will accept and send a suitable specialist. The master will be with you within 1 hour`
                )}
              </p>
            </div>
            <div className={scss.box}>
              <h1>
                {t(
                  "Осмотрим и расчитаем цену",
                  "Биз текшерип, баасын эсептеп чыгабыз",
                  "We will inspect and calculate the price"
                )}
              </h1>
              <p>
                {t(
                  `Наш мастер осмотрит и выевит все неполадки и наместе расчитает всю стоимость со всеми расходниками.`,
                  `Биздин техник бардык көйгөйлөрдү текшерип, аныктайт жана бүт чыгымды, анын ичинде бардык чыгымдалуучу материалдарды эсептейт.`,
                  `Our technician will inspect and identify all problems and calculate the entire cost including all consumables.`
                )}
              </p>
            </div>
            <div className={scss.box}>
              <h1>
                {t(
                  "Выполним работу",
                  "Ишти бүтүрөлү",
                  "Let's get the job done"
                )}
              </h1>
              <p>
                {t(
                  `Быстро и качественно выполним все ремонтные работы. `,
                  `We will carry out all repair work quickly and efficiently.`,
                  `We will carry out all repair work quickly and efficiently.`
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
