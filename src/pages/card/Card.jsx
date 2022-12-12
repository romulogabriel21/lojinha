
import './Card.css'

const Card = ({image, price, title}) => {
  
  return (
    <div className='card'>
        <img src={image} alt={title} />
        <p className='title'>{title}</p>
        <p className='price'>R$ {price}</p>
    </div>
  )
}

export default Card