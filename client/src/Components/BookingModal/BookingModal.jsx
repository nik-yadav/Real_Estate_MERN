import React, { useState } from 'react'
import "./BookingModal.css"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const BookingModal = ({opended, setOpened}) => {

  if(!opended){
    return null
  }

  const [date, setDate] = useState(new Date())

  return (
    <div>
      { opened && (
        <div>
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
          </LocalizationProvider>
        </div>
      )}
    </div>
  )
}

export default BookingModal