import React from "react";
import {Button, Input, Select} from "@chakra-ui/react"
import useCountries from "../../hooks/useCountries";
// import { useForm } from "@mantine/form";
// import { validateString } from "../../utils/common";
// import { Button, Group, Select, TextInput } from "@mantine/core";
// import useCountries from "../../hooks/useCountries";
// import Map from "../Map/Map";

const AddLocation = ({ nextStep, propertyDetails, setPropertyDetails }) => {

  const {getAll} = useCountries();

  const handleChange = (e) => {
    setPropertyDetails({...propertyDetails, [e.target.name]:e.target.value})
    console.log(propertyDetails)
  }

  const handleSubmit = ()=> {
    nextStep();
  }
  return (
    <form
    onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit()
    }}
    >
      <div
        className="flexCenter"
        style={{
          gap: "3rem",
          flexDirection: "row",
          color: "black"
        }}
      >
        {/* left side */}
        {/* inputs */}
        
        <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>
          Country
          <Select placeholder='Select option' name="country" onChange={handleChange}
          w={"100%"}
          >
            {getAll().map((country) => (
              <option key={country.value} value={country.value} style={{color:"black "}}>
                {country.label}
              </option>
            ))}
          </Select>
          City
          <Input placeholder="City" name="city" focusBorderColor='purple.500' onChange={handleChange}/>

          Address
          <Input
            w={"100%"}
            // withAsterisk
            placeholder="Address"
            name="address"
            onChange={handleChange}
          />
        </div>

        {/* right side */}

        <div style={{ flex: 1 }}>
          <h4>Hello there</h4>
        </div>
      </div>

      {/* <Group position="center" mt={"xl"}> */}
        <Button type="submit" className="nextstep">Next Step</Button>
      {/* </Group> */}
    </form>
  );
};

export default AddLocation;
