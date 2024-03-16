import React from "react";
// import "./Facilities.css";
import { Input, Textarea, Button } from "@chakra-ui/react";

const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
}) => {
    const handleChange = (e) => {
        console.log(propertyDetails);
        setPropertyDetails({ ...propertyDetails, facilities: { ...propertyDetails.facilities, [e.target.name]: e.target.value } });
      };
      
      const handleSubmit = async() => {
        const email = localStorage.getItem('mail');
        const date = new Date();
        e.preventDefault();
        console.log(propertyDetails);
        const response = await fetch('http://localhost:5000/property/properties', {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            title: propertyDetails.title,
            description: propertyDetails.description,
            price: propertyDetails.price,
            address: propertyDetails.address,
            image: propertyDetails.image,
            userEmail: email,
            city: propertyDetails.city,
            country: propertyDetails.country,
            facilities: propertyDetails.facility,
            createdAt: date,
          })
        })

        const json = response.json();
        if(!json.success){
          alert("Cannot add your property")
        }
        if(json.success){
          alert("Your Property is Added")
        }
      }

  return (
    <div className="facility-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flexCenter facility-container">
          <div className="input">
            Bedrooms
            <Input
              placeholder="Bedrooms"
              type="number"
              name="bedrooms"
              focusBorderColor="purple.500"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            Parking
            <Input
              placeholder="Parking"
              type="number"
              min={0}
              name="parking"
              focusBorderColor="purple.500"
              onChange={handleChange}
            />
          </div>
          
          <div className="input">
            BathRooms
            <Input
              placeholder="bathrooms"
              type="number"
              min={0}
              name="bathrooms"
              focusBorderColor="purple.500"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="buttons">
          <Button onClick={prevStep}>Back</Button>
          <Button
          //  onSubmit={handleSubmit}
           >Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Facilities;
