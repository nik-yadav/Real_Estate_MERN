const express = require('express')
const router = express.Router();
const ram = require("../Modal/UserModal");
const { json } = require('body-parser');


// api = "http://localhost:5000/bookings/bookingid/:bookingid"
router.post('/bookingid/:bookingid', async(req, res)=> {
    const {email, date, active} = req.body
    const id = req.params.bookingid;

    const array = [id, date, active];

    const checkid = (booking) => {
        return booking[0] == id ;
    }

    try {
        const userData = await ram.findOne({email})

        // console.log("hi")
        if(!userData){
            console.log("user doesn't exist")
            return res.json({success: false, message: "user doesn't exits"})
        }

        if(userData.bookedVisits === undefined || userData.bookedVisits.length === 0 ){

            // console.log("bi")

            await ram.findOneAndUpdate({email: req.body.email}, 
                { $push:{bookedVisits: array}}
                ).then(async()=> {
                    const data = await ram.findOne({email})
                    res.json({success: true, data: data})
                })
        }else{

            // console.log("ci")
            console.log(checkid)

            const result = userData.bookedVisits.filter(checkid);
            if(result.length == 0){
                await ram.findOneAndUpdate({email: req.body.email}, 
                    { $push:{bookedVisits: array} }
                    ).then(async()=> {
                        const data = await ram.findOne({email})
                        res.json({success: true, data: data})
                    })
            }else{
                if(checkid[0][2] === false){
                    userData.bookedVisits[0][2] = true;
                    await userData.save();
                    
                    // console.log("Booking updated:", userData.bookedVisits[index]);
                    res.json({ success: true });
                }else {
                    res.json({success: false,message: "This Property is booked"})
                    console.log(result);
                }
            }
             
        }   
    } catch (error) {
        // console.log("di")
        console.log(error.message)
        res.json({success: false})
    }
})

// api = "http://localhost:5000/bookings/book"
router.post('/book', async(req, res) => {
    email = req.body.email;
    try {
        const userData = await ram.findOne({email});
        // console.log(userData);
        if(userData === null){
            res.json({success: false, message: "Wrong Email"})
        }else{
            if(userData.bookedVisits === undefined){
                // console.log("neer")
                res.json({success: true, message: "Empty"})
            }
            else{
                // console.log("beer")
                res.json({success: true, data: userData.bookedVisits})
            }
        }
    } catch (error) {
        console.log(error.message)
        res.json({success: false})
    }
})

// api = http://localhost:5000/bookings/delete/:deleteid
router.put('/delete/:deleteid', async(req, res) => {
    const id = req.params.deleteid;
    const email = req.body.email;
    try {
        const userData = await ram.findOne({email})
        // console.log(id);

        // console.log(userData);
        const index = userData.bookedVisits.findIndex(booking => booking[0] === id);
        // console.log(index)
        if (index !== -1) {
            userData.bookedVisits[index][2] = false;
            console.log(userData)
            await userData.save();
            
            console.log("Booking updated:", userData.bookedVisits[index]);
            res.json({ success: true });
        }else {
            console.log("Booking not found");
            res.status(404).json({ success: false, message: "Booking not found" });
        }
    } catch (error) {
        console.log(error.message)
        res.json({success: false})  
    }
})

module.exports = router;