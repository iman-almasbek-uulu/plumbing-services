import scss from "./HeroBanner.module.scss";
import imgMario from "../../../assets/images/mario.png";
import { Button } from "../../ui/Button";
const HeroBanner = () => {
  return (
    <section id={scss.HeroBanner}>
      <div className="container">
        <div className={scss.Hero}>
          <div className={scss.banner}>
            <h1>
              Комплекс услуг от профессионалов: <br /> <span>Сантехник</span>
            </h1>
            <p>
              Наши мастера готовы взять на себя все бытовые и технические задачи
              – от мелкого ремонта до сложных инженерных работ.{" "}
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
