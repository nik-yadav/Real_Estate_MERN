import React, { useState } from 'react'
import "./AddProperty.css"
import AddLocation from "../AddLocation/AddLocation"
import AddImage from "../AddImage/AddImage"
import BasicDetails from "../BasicDetails/BasicDetails.jsx"
import {ChakraProvider, theme} from "@chakra-ui/react"
 
const AddProperty = ({opened, setopened}) => {
  
  if (!opened) {
    return null;
  }

  const handleCloseModal = () => {
    setActive(1);
    setopened(false);   
  }

  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 1 ? current - 1 : current));
  const [propertyDetails, setPropertyDetails] = useState({
      city:"",
      country:"",
      address:"",
  })

  return (
    <ChakraProvider theme={theme}>
    <div className="modal">
      <div className="modal-content">
        { opened &&
        <span className="close" onClick={handleCloseModal}>&times;</span>
        }
        {opened && active === 1 && (
          <div>
              <AddLocation nextStep={nextStep} propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails}/>
          </div>
        )}
        {opened && active === 2 && (
          <div>
            <AddImage nextStep={nextStep} prevStep={prevStep} propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails}/>
          </div>
        )}
        {opened && active === 3 && (
          <div>
              <BasicDetails nextStep={nextStep} prevStep={prevStep} propertyDetails={propertyDetails} setPropertyDetails={setPropertyDetails}/>
          </div>
        )}
        {opened && active === 4 && (
          <div>
            <Facilities prevStep={prevStep}/>
          </div>
        )}
        {opened && active === 5 && (
          <div>
            <h2>Step 5: Success!</h2>
            <p>Congratulations, your process is completed!</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </div>
    </div>
    </ChakraProvider>
  )
}

export default AddProperty