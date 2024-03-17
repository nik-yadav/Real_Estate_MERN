import React, { useState } from 'react'
import "./BookingModal.css"
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const BookingModal = ({opended, setOpened}) => {

  if(!opended){
    return null
  }

  const [date, setDate] = useState(dayjs(new Date()))
  const handleCloseModal = () => {
    setOpened(false);
    console.log(date);
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