import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {Button} from "@chakra-ui/react"
import "./AddImage.css";
const AddImage = ({
  nextStep,
  prevStep,
  propertyDetails, setPropertyDetails
}) => {

  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };

  return (
    <div className="flexColCenter uploadWrapper">
      <h2>Image Upload: Step 2</h2>
      {!imageURL ? (
        <div
          className="flexColCenter uploadZone"
          // onClick={() => widgetRef.current?.open()}
        >
          {/* <h2>Upload Image</h2> */}
          <AiOutlineCloudUpload size={120} color="grey" />
          <span style={{color: "black"}}>Upload Image</span>
        </div>
      ) : (
        <div
          className="uploadedImage"
          // onClick={() => widgetRef.current?.open()}
        >
          <img src={imageURL} alt="" />
        </div>
      )}

        <div className="buttons">
          <Button onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep} 
          // disabled={!imageURL}
          >
            Next
          </Button>
        </div>
    </div>
  );
};

export default AddImage;
