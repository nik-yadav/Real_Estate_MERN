import React from 'react'
import "./SearchBar.css"
import {HiLocationMarker} from "react-icons/hi"

const SearchBar = () => {
  return (
    <div className="flexCenter container">
        <HiLocationMarker color='var(--blue)' size={25} />
        <input type='text' placeholder='Search by title/city/country' />
        <button className="button">Search</button>
    </div>
  )
}

export default SearchBar