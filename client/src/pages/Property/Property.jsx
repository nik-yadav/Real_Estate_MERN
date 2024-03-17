import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Property.css";
import { propertycontext } from "../../Context/userContext";
import { PiShowerFill } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { LuDoorOpen } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { loadProperty } from "../../utils/api.js";
import Map from "../../Components/Map/Map.jsx";
import BookingModal from "../../Components/BookingModal/BookingModal.jsx";
import { PuffLoader } from "react-spinners";

const Property = () => {
  // const [propertyState] = useContext(propertycontext)
  const [modalOpened, setModalOpened] = useState(false);
  const [userData, setuserData] = useState();
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const fetchData = async () => {
    try {
      const data = await loadProperty(id);
      setuserData(data);
    } catch (error) {
      console.log("Error fetching properties");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <div className="wrappers">
            <div className="pr-container paddings flexCenter innerWidth ">
              <img src={`${userData.image}`} alt="home image" />
              <div className="pr-details flexCenter">
                <div className="flexColStart left">
                  <div className="head flexStart">
                    <span className="primaryText">{userData.title}</span>
                    <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                      ₹{userData.price}
                    </span>
                  </div>
                  <div className="flexStart facilities">
                    <div className="facility flexStart">
                      <PiShowerFill size={20} color="#1F3E72" />
                      <span>{userData.facilities.bathrooms} Bathrooms</span>
                    </div>
                    <div className="facility flexStart">
                      <FaCarAlt size={20} color="#1F3E72" />
                      <span>{userData.facilities.parking} Parking</span>
                    </div>
                    <div className="facility flexStart">
                      <LuDoorOpen size={20} color="#1F3E72" />
                      <span>{userData.facilities.bedrooms} Room/s</span>
                    </div>
                  </div>

                  <span
                    className="secondaryText"
                    style={{ textAlign: "justify" }}
                  >
                    {userData.description}
                  </span>

                  <div className="flexStart" style={{ gap: "1rem" }}>
                    <MdLocationPin size={25} />
                    <span className="secondaryText">
                      {userData.address} {userData.city} {userData.country}
                    </span>
                  </div>

                  {/* booking part */}
                  <button className="button" onClick={() => setModalOpened(true)}>Book Your Visit</button>
                  <BookingModal 
                    opended={modalOpened}
                    setOpened={setModalOpened}
                    propertyId={id}
                    email={localStorage.getItem('mail')}
                  />
                </div>

                {/* right side */}
                <div className="map">
                  <Map  
                address={userData.address}
                city={userData.city}
                country={userData.country}
                />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="wrapper">
          <div className="flexCenter paddings">
            <PuffLoader />
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
