import React, { useEffect, useState } from 'react'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

import "./Properties.css"


const Properties = () => {

  const [data,setData] = useState([]);

  const getAllProperties = async() => {
    try {
      const response = await fetch("http://localhost:5000/property/properties")
      const json1 = await response.json();
      if(!json1.success){
        alert("Unable to getch")
      }
      if(json1.success){
        setData(json1.values)
        // console.log(data)
      }
    } catch (error) {
      console.log("Something went wrong",error)
    }
  }
  useEffect(()=>{
    getAllProperties()
  },[])
  return (
    <div className='p-wrapper'>
      <div className='p-container'>
      {data.map((card,i)=> (
              <PropertyCard key={i} card={card} />
          ))}
      </div>
    </div>
  )
}

export default Properties