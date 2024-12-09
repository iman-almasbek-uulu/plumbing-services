import scss  from './Services.module.scss';

interface CardProps {
  title: string;
  imageUrl: string;
  test1:string;
}

 
const cards: CardProps[] = [
  {
    title: "Сантехник",
    imageUrl: "https://png.pngtree.com/png-vector/20240917/ourmid/pngtree-plumbing-man-with-tools-transparent-free-download-png-image_13845753.png",
    test1:"Устранение протечек, установка сантехники, ремонт трубопроводов – наши мастера выполнят все быстро и качественно!",

  },
  {
    title: "Плотник",
    imageUrl: "https://png.pngtree.com/png-vector/20240512/ourmid/pngtree-carpenter-service-logo-concept-png-image_12439005.png",
    test1:"Наши специалисты решат любые бытовые и инженерные задачи: от ремонта электрики до сварочных работ. Быстрый выезд и высокое качество гарантированы.",
  },
  {
    title: "Сварщик",
    imageUrl: "https://static.tildacdn.com/tild6361-3066-4631-a566-613237383064/28746.jpg",
    test1:"Наши специалисты решат любые бытовые и инженерные задачи: от ремонта электрики до сварочных работ. Быстрый выезд и высокое качество гарантированы.",

  },
  {
    title: "Электрик",
    imageUrl: "https://kartinki.pics/uploads/posts/2022-02/thumbs/1645767307_2-kartinkin-net-p-elektrik-kartinki-2.png",
    test1:"Ремонт и монтаж электросетей, установка освещения, замена розеток – мы всегда на связи и готовы помочь!",

  },
];

const Services = () => {

 


  return (
    <section id={scss.Services}>
      <h1 className={scss.text}>Наши популярные услуги</h1>
      <div>
        <div  className={scss.block}>
          {cards.map((card, index) => (
            <div className={scss.cards}
              key={index}>
              <div className={scss.card}>
                <img className={scss.image}
                  src={card.imageUrl}
                  alt={card.title}/>
                <h3 className={scss.title}>{card.title}</h3>
                <p className={scss.test1}>{card.test1}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={scss.cardnext}>Показать больше</div>

      
      

      
      
      <div className={scss.cardname}>

     <div className={scss.cardone}>
        <h1 className={scss.cardtext}>Свяжитесь с нами</h1>
        <p className={scss.cardtitle}>Свяжитесь с нами
        Оставьте нам ваш номер и наш оператор свяжется с вами для консультатции</p>
     </div>

     <div className={scss.cardtwo}>
        <input className={scss.cartinput}  placeholder='Ваше имя' />
        <input  className={scss.cartinput}  placeholder='Номер телефона' />
        <button className={scss.cartbutton}>Хочу консультацию</button>
        
        </div>
    </div>
   
      </div>
    </section>
  );

};

export default Services;
