import React from "react";
import "./BasicDetails.css";
import { Input, Textarea, Button } from "@chakra-ui/react";

const BasicDetails = ({
  nextStep,
  prevStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const handleChange = (event) => {
    console.log(propertyDetails)
    setPropertyDetails({...propertyDetails, [event.target.name]:event.target.value});
  };

  return (
    <div className="details-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flexColCenter details-container">
          <div className="input">
            Property Name
            <Input
              placeholder="Property Name "
              name="propertyname"
              focusBorderColor="purple.500"
              style={{width:"400px"}}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            Description
            <Textarea
              placeholder="Enter Property Description"
              name="description"
              resize={"none"}
              focusBorderColor="purple.500"
              onChange={handleChange}
            />
          </div>
          
          <div className="input">
            Price
            <Input
              placeholder="Price"
              type="number"
              min={0}
              name="price"
              style={{width:"200px"}}
              focusBorderColor="purple.500"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="buttons">
          <Button onClick={prevStep}>Back</Button>
          <Button
            onClick={nextStep}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
