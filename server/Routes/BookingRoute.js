const express = require('express')
const router = express.Router();
const ram = require("../Modal/UserModal")


// api = "http://localhost:5000/bookings/:bookingid"
router.post('/:bookingid', async(req, res)=> {
    const {email, date} = req.body
    const id = req.params.bookingid;

    const array = [id, date];

    const checkid = (booking) => {
        return booking[0] == id;
    }

    try {
        const userData = await ram.findOne({email})

        console.log("hi")

        if(userData.bookedVisits === undefined || userData.bookedVisits.length === 0 ){

            console.log("bi")

            await ram.findOneAndUpdate({email: req.body.email}, 
                { $push:{bookedVisits: array} }
                ).then(async()=> {
                    const data = await ram.findOne({email})
                    res.json({success: true, data: data})
                })
        }else{

            console.log("ci")

            const result = userData.bookedVisits.filter(checkid);
            if(result.length == 0){
                await ram.findOneAndUpdate({email: req.body.email}, 
                    { $push:{bookedVisits: array} }
                    ).then(async()=> {
                        const data = await ram.findOne({email})
                        res.json({success: true, data: data})
                    })
            }else{
                res.json({success: false,message: "This Property is booked"})
            }
             
        }   
    } catch (error) {
        console.log("di")
        console.log(error.message)
        res.json({success: false})
    }
})

module.exports = router;