import React from 'react'
import Map from "../Map/Map"
import useCountries from "../../hooks/useCountries"
import {useForm} from "@mantine/form";
import {Button, Group, Select, TextInput} from "@mantine/core"

const AddLocation = ({propertyDetails, setPropertyDetails, nextStep}) => {
    const { getAll } = useCountries();
    const form = useForm({
      initialValues: {
        country: propertyDetails?.country,
        city: propertyDetails?.city,
        address: propertyDetails?.address,
      },
    });
  
    const { country, city, address } = form.values;

    const handleSubmit = () => {
      nextStep();
    }
  
    return (
      <form
       >
        <div
          className="flexCenter"
          style={{
            justifyContent: "space-between",
            gap: "3rem",
            marginTop: "3rem",
            flexDirection: "row",
          }}
        >
          {/* left side */}
          {/* inputs */}
  
          <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>
            <Select
              w={"100%"}
              // withAsterisk
              label="Country"
              clearable
              searchable
              data={getAll()}
              {...form.getInputProps("country", { type: "input" })}
            />
  
            <TextInput
              w={"100%"}
              // withAsterisk
              label="City"
              {...form.getInputProps("city", { type: "input" })}
            />
  
            <TextInput
              w={"100%"}
              // withAsterisk
              label="Address"
              {...form.getInputProps("address", { type: "input" })}
            />
          </div>
  
          {/* right side */}
  
          {/* <div style={{ flex: 1 }}>
            <Map address={address} city={city} country={country} />
          </div> */}
        </div>
  
        <Group position="center" mt={"xl"}>
          <Button type="submit">Next Step</Button>
        </Group>
      </form>
    );
  };
  
  export default AddLocation;
  