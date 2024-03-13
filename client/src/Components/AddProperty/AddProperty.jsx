import React, { useState } from 'react'
import {Modal, Stepper, Container} from "@mantine/core"

const AddProperty = ({opened, setOpened}) => {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 1 ? current - 1 : current));
    const [propertyDetails, setPropertyDetails] = useState({
        city:"",
        country:"",
        address:"",
    })

  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside={true}
        size={"90rem"}
        style={{background: "green"}}
    >
        Property Modal
    </Modal>
  )
}

export default AddProperty