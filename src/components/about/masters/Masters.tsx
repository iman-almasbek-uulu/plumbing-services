import scss from './Masters.module.scss'
import manImg from '../../../assets/images/cart.jpg'
import Card from '../../ui/Card'
import { useTranslate } from '../../../utils/translate'
import { useState } from 'react'

const Masters = () => {
  const {t} = useTranslate()
  const [visibleMasters, setVisibleMasters] = useState(10)
  
  const obj = {
    img: manImg,
    name: "Максат Касымалиев",
    profi: "Мастер сантехник"
  }
  
  const arr = Array.from({length: 30}, (_,i) => ({
    ...obj, 
    id: i + 1
  }))

  const handleShowMore = () => {
    setVisibleMasters(prev => 
      Math.min(prev + 7, arr.length)
    )
  }

  return (
    <section id={scss.Masters}>
      <div className="container">
        <h2>{t("Наши мастера","Биздин усталар","Our Masters")}</h2>
        <div className={scss.masters}>
          {arr.slice(0, visibleMasters).map((el) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
        {visibleMasters < arr.length && (
          <button onClick={handleShowMore}>
            {t(
              "Показать больше",
              "Дагы көрсөтүү",
              "Show more"
            )}
          </button>
        )}
      </div>
    </section>
  )
}

export default Masters