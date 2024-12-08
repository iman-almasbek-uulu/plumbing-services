import scss from './ui.module.scss'

type Props = {
  data: {
    id: string | number,
    img: string,
    name:string,
    profi: string
  }
}

export default function Card({data}: Props) {
  return (
    <div key={data.id} id={scss.Card}>
      <img src={data.img} alt="image" />
      <div className={scss.block}>
        <p className={scss.name}>{data.name}</p>
        <p className={scss.profi}>{data.profi}</p>
      </div>
    </div>
  )
}