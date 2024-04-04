import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Property.css";
// import { propertycontext } from "../../Context/userContext";
import { PiShowerFill } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { LuDoorOpen } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { loadProperty, bookingData  } from "../../utils/api.js";
import Map from "../../Components/Map/Map.jsx";
import BookingModal from "../../Components/BookingModal/BookingModal.jsx";
import { PuffLoader } from "react-spinners";
import {user} from "../../Context/userContext.jsx"

const Property1 = () => {
  // const [propertyState] = useContext(propertycontext)
  const [modalOpened, setModalOpened] = useState(false);
  const [propertyData, setpropertyData] = useState();
  const [bookedData, setbookedData] = useState([]);
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const [userState] = useContext(user)

  const fetchData = async () => {
    const email = localStorage.getItem('email')
    // console.log(email)
    try {
      const data = await loadProperty(id);
      const booking = await bookingData(email);
      setpropertyData(data);
      // console.log(data);
      setbookedData(booking);
      // console.log(booking); 
    } catch (error) {
      console.log("Error fetching properties");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {propertyData? (
        <div className="flexStart facilities">
        <div className="facility flexStart">
          <PiShowerFill size={20} color="#1F3E72" />
          <span style={{color: "white"}}>{propertyData.facilities.bathrooms} Bathrooms</span>
        </div>
        <div className="facility flexStart">
          <FaCarAlt size={20} color="#1F3E72" />
          <span style={{color: "white"}}>{propertyData.facilities.parking} Parking</span>
        </div>
        <div className="facility flexStart">
          <LuDoorOpen size={20} color="#1F3E72" />
          <span style={{color: "white"}}>{propertyData.facilities.bedrooms} Room/s</span>
        </div>

        {bookedData.length !== 0 && bookedData.find((booking) => booking[0] == id) ? (<h2 style={{color: "white"}}> Right </h2>) : (<h2 style={{color: "white"}}> Wrong </h2>)}

        <button className="button" onClick={() => setModalOpened(true)}>Book Your Visit</button>
         <BookingModal 
           opended={modalOpened}
           setOpened={setModalOpened}
           propertyId={id}
           email={localStorage.getItem('email')}
         />

      </div>

      

      ): (
        <div> It required time</div>
      )}
    </div>
    
  );
};

export default Property1;


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
//   <>
//     {console.log(bookedData.bookedVisits?.map(booking => booking[0]).includes(id))}
//     <button className="button" onClick={() => setModalOpened(true)}>Book Your Visit</button>
//     <BookingModal 
//       opended={modalOpened}
//       setOpened={setModalOpened}
//       propertyId={id}
//       email={localStorage.getItem('mail')}
//     />
//   </>
// )}
