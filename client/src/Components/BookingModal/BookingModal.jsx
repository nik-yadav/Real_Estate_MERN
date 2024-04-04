import React, { useState } from 'react'
import "./BookingModal.css"
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const BookingModal = ({opended, setOpened, propertyId, email}) => {

  if(!opended){
    return null
  }

  const [date, setDate] = useState(dayjs(new Date()))
  const handleCloseModal = async() => {
    
    // console.log(date.$d);
    // console.log(email);
    console.log(propertyId);
    const response = await fetch(`http://localhost:5000/bookings/bookingid/${propertyId}`, {
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email: email,
        date: date.$d,
        active: true,
      })
    })

    const json = await response.json();

    // console.log(json)

    if(!json.success){
      if(json.message){
        alert("This Property is already Booked")
      }else{
        alert("Server Error")
      }
    }

    if(json.success){
      alert("Your Property is added")
    }
    setOpened(false);
  };

  return (
    <div>
      {opended && (
        <div>
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["StaticDatePicker"]}>
              <DemoItem label="Static variant">
                <StaticDatePicker
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  minDate={dayjs(new Date())}
                  onAccept={handleCloseModal}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      )}
    </div>
  )
}

export default BookingModal