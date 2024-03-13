import React from 'react'
import "./Contact.css"
import {Grid, Box} from "@mui/material"
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"

const Contact = () => {
  return (
    <div className='c-wrapper'>
      <div className="innerWidth paddings flexCenter c-container">
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>
          <div className='flexColStart contactModes'>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <div className='box-container mode'>
                    <div className='flexStart mode1'>   
                      <div className='flexCenter icon'>
                        <MdCall size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Call</span>
                        <span className="secondaryText">021 123 145 14</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Call now</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className='box-container mode'>
                    <div className='flexStart mode1'>   
                      <div className='flexCenter icon'>
                        <BsFillChatDotsFill size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Video Call</span>
                        <span className="secondaryText">021 123 145 14</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Video Call now</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className='box-container mode'>
                    <div className='flexStart mode1'>   
                      <div className='flexCenter icon'>
                        <BsFillChatDotsFill size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Chat</span>
                        <span className="secondaryText">021 123 145 14</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Chat now</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className='box-container mode'>
                    <div className='flexStart mode1'>   
                      <div className='flexCenter icon'>
                        <HiChatBubbleBottomCenter size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Message</span>
                        <span className="secondaryText">021 123 145 14</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Message now</div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact