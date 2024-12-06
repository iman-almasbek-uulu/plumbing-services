import scss from "./HeroBanner.module.scss";
import imgMario from "../../../assets/images/mario.png";
import { Button } from "../../ui/Button";
import { useTranslate } from "../../../utils/translate";

const HeroBanner = () => {
  const { t } = useTranslate();

  return (
    <section id={scss.HeroBanner}>
      <div className="container">
        <div className={scss.Hero}>
          <div className={scss.banner}>
            <h1>
              {t("Комплекс услуг от профессионалов:","кесипкөйлөрдөн бир катар кызматтар:","A range of services from professionals:")}<br /> <span>{t("Сантехник","Сантехник","Plumber ")} </span>
            </h1>
            <p>{t(`Наши мастера готовы взять на себя все бытовые и технические задачи
              – от мелкого ремонта до сложных инженерных работ.`,`Our masters are ready to take on all household and technical tasks.
              – from minor repairs to complex engineering work`,`Биздин мастерлер бардык чарбалык жана техникалык милдеттерди аткарууга даяр.
              – майда ремонттон баштап татаал инженердик иштерге чейин`)}
             
            </p>
            <div className={scss.Button}>
              <Button />
            </div>
          </div>
          <div>
            <img src={imgMario} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
