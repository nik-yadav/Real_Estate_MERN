import React, { useContext } from 'react'
import './PropertyCard.css'
import {useNavigate} from "react-router-dom"
import { propertycontext } from '../../Context/userContext'

const PropertyCard = ({card,i}) => {

    const navigate = useNavigate();
    const [propertyState, setpropertyState] = useContext(propertycontext)

    const handleClick = (card) => {
      setpropertyState(card)
      // console.log(card)
      navigate(`../properties/${card._id}`)
    }

  return (
    <div className='flexColStart r-card'
    onClick={() => handleClick(card)}
     >
        <img src={card.image} alt='home' />
        <span className="secondaryText r-price">
            <span style={{ color: "orange" }}>$</span>
            <span>{card.price}</span>
        </span>
        <span className="primaryText"> {card.title.length > 15 ? card.title.slice(0, 15)+"..." : card.title}</span>
        <span className="secondaryText"> {card.description.length > 15 ? card.description.slice(0, 70)+"..." : card.description}</span>
    </div>
  )
}

export default PropertyCard