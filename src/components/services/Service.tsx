import { useState } from 'react';
import scss from './Service.module.scss';
import { useTranslate } from '../../utils/translate';
import ModalService from './ModalService';

const Service = () => {
    const {t} = useTranslate()
    const [tabIndex, setTabIndex] = useState(0)
    const [isShow, setIsShow] = useState(false)
    const arrTabs = [
        {
            title: {
                ru: "сантехник",
                ky: "Сантехник",
                en: "Plumber"
            },
            data: [
                        {
                            name: {
                                ru: "Устранение протечек",
                                ky: "Агып чыгуу көйгөйүн чечүү",
                                en: "Leak Repair"
                            },
                            price: {
                                ru: "от 3000 сомов",
                                ky: "3000 сомдон баштап",
                                en: "from 3000 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Установка смесителя",
                                ky: "Аралаштыргычты орнотуу",
                                en: "Mixer Installation"
                            },
                            price: {
                                ru: "от 2500 сомов",
                                ky: "2500 сомдон баштап",
                                en: "from 2500 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Замена труб",
                                ky: "Трубаларды алмаштыруу",
                                en: "Pipe Replacement"
                            },
                            price: {
                                ru: "от 5000 сомов",
                                ky: "5000 сомдон баштап",
                                en: "from 5000 KGS"
                            }
                        }
            ]
        },
        {
            title: {
                ru: "Слесарь",
                ky: "Слесарь",
                en: "Locksmith"
            },
            data: [
                        {
                            name: {
                                ru: "Ремонт замков",
                                ky: "Кулпуларды оңдоо",
                                en: "Lock Repair"
                            },
                            price: {
                                ru: "от 2000 сомов",
                                ky: "2000 сомдон баштап",
                                en: "from 2000 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Установка дверей",
                                ky: "Эшиктерди орнотуу",
                                en: "Door Installation"
                            },
                            price: {
                                ru: "от 5000 сомов",
                                ky: "5000 сомдон баштап",
                                en: "from 5000 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Ремонт металлических конструкций",
                                ky: "Металл конструкцияларын оңдоо",
                                en: "Metal Construction Repair"
                            },
                            price: {
                                ru: "от 8000 сомов",
                                ky: "8000 сомдон баштап",
                                en: "from 8000 KGS"
                            }
                        }
            ]
        },
        {
            title: {
                ru: "Электрик",
                ky: "Электрик",
                en: "Electrician"
            },
            data: [
                        {
                            name: {
                                ru: "Замена розетки",
                                ky: "Розетканы алмаштыруу",
                                en: "Socket Replacement"
                            },
                            price: {
                                ru: "от 1500 сомов",
                                ky: "1500 сомдон баштап",
                                en: "from 1500 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Монтаж электропроводки",
                                ky: "Электр зымдарын орнотуу",
                                en: "Electrical Wiring Installation"
                            },
                            price: {
                                ru: "от 5000 сомов",
                                ky: "5000 сомдон баштап",
                                en: "from 5000 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Ремонт электрощитка",
                                ky: "Электрощитти оңдоо",
                                en: "Electrical Panel Repair"
                            },
                            price: {
                                ru: "от 7000 сомов",
                                ky: "7000 сомдон баштап",
                                en: "from 7000 KGS"
                            }
                        }
            ]
        },
        {
            title: {
                ru: "Сварщик",
                ky: "Дат басуучу",
                en: "Welder"
            },
            data: [
                        {
                            name: {
                                ru: "Сварка металлических конструкций",
                                ky: "Металл конструкцияларын ширетүү",
                                en: "Metal Structures Welding"
                            },
                            price: {
                                ru: "от 8000 сомов",
                                ky: "8000 сомдон баштап",
                                en: "from 8000 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Ремонт труб",
                                ky: "Трубаларды оңдоо",
                                en: "Pipe Repair"
                            },
                            price: {
                                ru: "от 6000 сомов",
                                ky: "6000 сомдон баштап",
                                en: "from 6000 KGS"
                            }
                        },
                        {
                            name: {
                                ru: "Изготовление металлических дверей",
                                ky: "Металл эшиктерди жасоо",
                                en: "Metal Door Fabrication"
                            },
                            price: {
                                ru: "от 15000 сомов",
                                ky: "15000 сомдон баштап",
                                en: "from 15000 KGS"
                            }
                        }
            ]
        }
    ];
    
    

    return (
        <>
        
            {isShow ?
                <ModalService isShow={isShow} setIsShow={setIsShow} />
                :
                <section id={scss.Service}>
                <div className={scss.tabs}>
                    {arrTabs.map((el,i) => (
                        <button key={i}
                        className={i === tabIndex ? scss.active_tab : ''}
                        onClick={() => setTabIndex(i)}>{
                            t(el.title.ru,el.title.ky,el.title.en)[0].toUpperCase() 
                            + t(el.title.ru,el.title.ky,el.title.en).slice(1)}
                        </button>
                    ))}
                </div>
                <div className={scss.service}>
                    <div className="container">
                        <div className={scss.block}>
                            <h2>{t(
                                "" + arrTabs[tabIndex].title.ru,
                                "" + arrTabs[tabIndex].title.ky, 
                                "" + arrTabs[tabIndex].title.en)[0].toUpperCase()
                                +
                                t(
                                    "" + arrTabs[tabIndex].title.ru,
                                    "" + arrTabs[tabIndex].title.ky, 
                                    "" + arrTabs[tabIndex].title.en).slice(1)
                            }</h2>
                            <button onClick={() => setIsShow(!isShow)} id={scss.button}> {t("Вызвать мастера","Мастерди чакыруу","Call a specialist")}</button>
                        </div>
                        <ul className={scss.list}>
                            {
                                arrTabs[tabIndex].data.map((el,i) => (
                                    <li key={i}>
                                        <span className={scss.name}>{t(
                                            el.name.ru,
                                            el.name.ky,
                                            el.name.en
                                        )}</span>
                                        <span className={scss.price}>{t(
                                            el.price.ru,
                                            el.price.ky,
                                            el.price.en
                                        )}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            }
        </>
    );
};

export default Service;