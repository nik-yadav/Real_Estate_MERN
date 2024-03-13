import React, {useState} from 'react'
import "./Value.css"
import {motion} from 'framer-motion'
import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material"
import {
  MdOutlineArrowDropDown,
} from "react-icons/md";
import data from "../../utils/accordion"

const Value = () => {

  return (
    <div className='v-container innerWidth paddings flexCenter'>
      <div className="v-left">
          <motion.div
          initial={{x:"7rem", opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{
            duration: 2,
            type: "ease-in"
          }}

          className='image-container'
          >
            <img src='./value.png' alt=''/>
          </motion.div>
      </div>

      <div className='v-right flexColStart'>
        <span className='orangeText'>Our Value</span>
        <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          {data.map((value, index) => (
            <Accordion className='accordion' key={index}>
              <AccordionSummary
                expandIcon={<MdOutlineArrowDropDown />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <span className='flexCenter icon'>{value.icon}</span>
                <span className='primarytext'>{value.heading}</span>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='secondaryText'>{value.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </div>
  )
}

export default Value