import React from "react";
import "./BasicDetails.css";
import { Input, Textarea, Button } from "@chakra-ui/react";

const BasicDetails = ({
  nextStep,
  prevStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const handleChange = (e) => {
    setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flexCenter basic-wrapper">
        Property Name
        <Input
          placeholder="Property Name "
          name="propertyname"
          focusBorderColor="purple.500"
          onChange={handleChange}
        />
        Description
        <Textarea
          placeholder="Enter Property Description"
          name="description"
          onChange={handleChange}
        />
        Price
        <Input
          placeholder="Price"
          min={0}
          name="price"
          onChange={handleChange}
        />
      </div>
      <div className="buttons">
        <Button onClick={prevStep}>Back</Button>
        <Button
          onClick={nextStep}
          // disabled={!imageURL}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default BasicDetails;
