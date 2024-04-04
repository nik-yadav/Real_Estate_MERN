import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Property.css";
// import { propertycontext } from "../../Context/userContext";
import { PiShowerFill } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { LuDoorOpen } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { loadProperty, bookingData, deletionbooking  } from "../../utils/api.js";
import Map from "../../Components/Map/Map.jsx";
import BookingModal from "../../Components/BookingModal/BookingModal.jsx";
import { PuffLoader } from "react-spinners";
import {user} from "../../Context/userContext.jsx"
import {Button} from "@chakra-ui/react"

const Property = () => {
  // const [propertyState] = useContext(propertycontext)
  const [modalOpened, setModalOpened] = useState(false);
  const [propertyData, setpropertyData] = useState();
  const [bookedData, setbookedData] = useState();
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const [userState] = useContext(user)

  const fetchData = async () => {
    const email = localStorage.getItem('email')
    // console.log(email)
    try {
      const data = await loadProperty(id);
      const book = await bookingData(email);
      setpropertyData(data);
      setbookedData(book);
      // console.log(book)
      // const value = book.find((booking) => booking[0] == id && booking[2] == true)
      // console.log(value)
      // console.log(booking)
    } catch (error) {
      console.log("Error fetching properties");
    }
  };

  const cancelBooking = async() => {
    
    try {
      await deletionbooking(id);
    } catch (error) {
      console.log("Error Deleting Properties")
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <button onClick={console.log(bookedData)}>hello there </button> */}
      {propertyData ? (
        <>
          <div className="wrappers">
            <div className="pr-container paddings flexCenter innerWidth ">
              <img src={`${propertyData.image}`} alt="home image" />
              <div className="pr-details flexCenter">
                <div className="flexColStart left">
                  <div className="head flexStart">
                    <span className="primaryText">{propertyData.title}</span>
                    <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                      ₹{propertyData.price}
                    </span>
                  </div>
                  <div className="flexStart facilities">
                    <div className="facility flexStart">
                      <PiShowerFill size={20} color="#1F3E72" />
                      <span>{propertyData.facilities.bathrooms} Bathrooms</span>
                    </div>
                    <div className="facility flexStart">
                      <FaCarAlt size={20} color="#1F3E72" />
                      <span>{propertyData.facilities.parking} Parking</span>
                    </div>
                    <div className="facility flexStart">
                      <LuDoorOpen size={20} color="#1F3E72" />
                      <span>{propertyData.facilities.bedrooms} Room/s</span>
                    </div>
                  </div>

                  <span
                    className="secondaryText"
                    style={{ textAlign: "justify" }}
                  >
                    {propertyData.description}
                  </span>

                  <div className="flexStart" style={{ gap: "1rem" }}>
                    <MdLocationPin size={25} />
                    <span className="secondaryText">
                      {propertyData.address} {propertyData.city} {propertyData.country}
                    </span>
                  </div>

                  {/* booking part */}
                  {/* {console.log(userState)} */}
                  {bookedData.length !== 0 && bookedData.find((booking) => booking[0] == id && booking[2] == true ) ? (
                    <>
                      <Button
                        variant="outline"
                        w={"100%"}
                        color="red"
                        onClick={() => cancelBooking()}
                        // disabled={cancelling}cd cd
                      >
                        <span>Cancel booking</span>
                      </Button>
                      {/* <span>
                        Your visit already booked for date{" "}
                        {bookings?.filter((booking) => booking?.id === id)[0].date}
                      </span> */}
                    </>
                  ): (
                    <>
                    {/* {console.log("wrong")} */}
                    <button className="button" onClick={() => setModalOpened(true)}>Book Your Visit</button>
                    <BookingModal 
                      opended={modalOpened}
                      setOpened={setModalOpened}
                      propertyId={id}
                      email={localStorage.getItem('email')}
                    />
                  </>
                  )}
                  
                  
                </div>

                {/* right side */}
                <div className="map">
                  <Map  
                address={propertyData.address}
                city={propertyData.city}
                country={propertyData.country}
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


// {bookedData.bookedVisits?.map(booking => booking[0]).includes(id) ? (
//   <>
//     <Button
//       variant="outline"
//       w={"100%"}
//       color="red"
//       // onClick={() => cancelBooking()}
//       // disabled={cancelling}
//     >
//       <span>Cancel booking</span>
//     </Button>
//     <span>
//       Your visit already booked for date{" "}
//       {bookings?.filter((booking) => booking?.id === id)[0].date}
//     </span>
//   </>
// ) : (
  // <>
  //   {console.log(bookedData.bookedVisits?.map(booking => booking[0]).includes(id))}
  //   <button className="button" onClick={() => setModalOpened(true)}>Book Your Visit</button>
  //   <BookingModal 
  //     opended={modalOpened}
  //     setOpened={setModalOpened}
  //     propertyId={id}
  //     email={localStorage.getItem('mail')}
  //   />
  // </>
// )}
