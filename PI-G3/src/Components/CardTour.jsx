import React from 'react'
import { Link } from 'react-router-dom'

{/* ESTE COMPONENTE CARD SON LAS CARD QUE VAN A MOSTRAR EN LA SECCION RECOMENDACIONES DONDE SE VERAN TODOS LOS TOUR QUE SE OFRECEN*/}
const CardTour = () => {
  return (
    <div className='card-tour'>
        
        <img className='img-card-tour' src="https://www.clarin.com/2022/03/01/2oF9F-Mnr_2000x1500__1.jpg" alt="img-jujuy" />
        <Link to={'/detail'} className="link-card-tour">
        <div>
          <p>JUJUY</p>
        <p className='p-card-tour'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
             omnis odit? Quasi non doloremque quis dolore nisi eligendi, doloribus,
              autem officia amet ut voluptas fugiat ex! Tenetur suscipit ullam possimus.</p>
    </div>
    </Link>
        </div>
        
  )
}

export default CardTour