import React, { useState } from 'react'
import "./Residencies.css"
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import { sliderSettings } from '../../utils/common';
import PropertyCard from '../PropertyCard/PropertyCard.jsx';
import {useNavigate} from "react-router-dom"
 
import data from "../../utils/slider.json"

const SlideNextButton = () => {
  const swiper = useSwiper();
  return(
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className='r-prevButton'>
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className='r-nextButton'>
        &gt;
      </button>
    </div>
  )
}

const Residencies = () => {

  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigate('/properties')
    setClicked(true)
  }

  return (
    <div id='residencies' className='r-wrapper'>
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText"> Popular Residencies</span>
        </div>
        <Swiper onClick={handleClick} {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, i)=> (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Residencies