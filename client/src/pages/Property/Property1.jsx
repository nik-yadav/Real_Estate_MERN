import React, { useEffect, useContext, useState } from 'react'
import {useLocation} from "react-router-dom"
import "./Property.css";
import { propertycontext } from '../../Context/userContext'
import { PiShowerFill } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { LuDoorOpen } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import Map from "../../Components/Map/Map.jsx";
import BookingModal from "../../Components/BookingModal/BookingModal.jsx";

const Property = () => {

  const [propertyState] = useContext(propertycontext)
  const [modalOpened, setModalOpened] = useState(false)
  const {pathname} = useLocation();
  const id = pathname.split('/').slice(-1)[0];

  useEffect(()=>{
    loadProperty()
  }, [])

  return(
    <div className='wrapper'>
      <div className='pr-container flexColStart paddings innerWidth'>
          <img src={`${propertyState.image}`} alt='' />
          <div className="pr-details flexCenter">
            <div className="flexColStart left">
              <div className="head flexStart">
                <span className="primaryText">{propertyState.title}</span>
                <span className="orangeText" style={{fontSize: "1.5rem"}}>
                ₹{propertyState.price}
                </span>
              </div>
              <div className="flexStart facilities">
                <div className="facility flexStart">
                  <PiShowerFill size={20} color='#1F3E72'/>
                  <span>{propertyState.facilities.bathrooms} Bathrooms</span>
                </div>
                <div className="facility flexStart">
                  <FaCarAlt size={20} color='#1F3E72' />
                  <span>{propertyState.facilities.parking} Parking</span>
                </div>
                <div className="facility flexStart">
                  <LuDoorOpen size={20} color='#1F3E72' />
                  <span>{propertyState.facilities.bedrooms} Room/s</span>
                </div>
              </div>

              <span className="secondaryText" style={{textAlign:"justify"}}>
                {propertyState.description}
              </span>

              <div className="flexStart" style={{gap: "1rem"}}>
                <MdLocationPin size={25} />
                <span className="secondaryText">
                  {propertyState.address}{" "}
                  {propertyState.city}{" "}
                  {propertyState.country}
                </span>
              </div>


              {/* booking part */}
              <button className='button'>Book Your Visit</button>
              {/* <BookingModal 
                opended={modalOpened}
                setOpened={setModalOpened}
                propertyID={id}
                email={propertyState.email}
              /> */}
            </div>

            {/* right side */}
            <div className="map">
              {/* <Map  
                address={propertyState.address}
                city={propertyState.city}
                country={propertyState.country}
                /> */}
            </div>

          </div>
      </div>
    </div>
  )
}

export default Property