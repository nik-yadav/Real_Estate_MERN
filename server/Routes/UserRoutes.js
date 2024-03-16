const express = require('express')
const router = express.Router();
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const ram = require('../Modal/UserModal.js')
const jwt = require('jsonwebtoken')
const jwtsecret = "hellounclenamastechalokaamkibaatpeaateh"

// api = "http://localhost:5000/routes/createuser"
router.post('/createuser',
[
    body("email").isEmail(),
    body("username").isLength({min: 6}),
    body("password", "Incorrect Password").isLength({min: 6})
]
,async(req,res)=> {

    // console.log(
    //     req.body.password,
    //     req.body.email,
    //     req.body.username
    // );
    const error = validationResult(req)
    const email = req.body.email;
    const data = await ram.findOne({email});
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    try {
        if(data === null){
            let salt = bcrypt.genSaltSync(10); 
            const setpassword = await bcrypt.hash(req.body.password, salt)
            await ram.create({
                email: req.body.email,
                username: req.body.username,
                password: setpassword,
            })
            res.status(200).json({success: true})
        }else{
            res.status(200).json({success: false, message: "your email is already there"})
        }
    } catch (error) {
        console.log("the error is: ", error)
        res.json({success: false})
    }
})

// api = "http://localhost:5000/routes/loginuser"
router.post('/loginuser',async(req,res)=> {
    // console.log(
    //     req.body.username,
    //     req.body.password,
    // )
    try {
        const username = req.body.username;
        const userData = await ram.findOne({username});
        const checkPassword = await bcrypt.compare(req.body.password, userData.password);
        // console.log(checkPassword)
        if(userData === null || checkPassword != true){
            res.status(200).json({success: true,message: "Invalid Credentials"});
        }else{
            const data = {
                user:{
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtsecret)
            res.status(200).json({success: true, authToken: authToken, mail: userData.email})
        }    
    } catch (error) {
        console.log(error);
        res.status(200).json({status: false})
    }
})


module.exports = router;