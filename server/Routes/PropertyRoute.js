const express = require('express')
const router = express.Router();
const ram = require('../Modal/ResidencyModal')

// api = "http://localhost:5000/property/properties"
router.get('/properties', async(req, res) => {
    try {
        const values = await ram.find({});
        res.json({success: true, values})
    } catch (error) {
        res.json({success: false})
    }
})

// api = "http://localhost:5000/property/properties"
router.post('/properties', async(req, res)=> {
    try {
        await ram.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
        })

        res.json({success: true})
    } catch (error) {
        res.json({status: false})
    }
})

// api = "http://localhost:5000/property/properties/65e96bff689c5bc89ebf1408"
router.post('/properties/:propertyid', async(req, res) => {
    _id = req.params.propertyid
    try {
        const userData = await ram.findOne({_id});
        console.log("done your data");
        res.json({success: true, userData})
    } catch (error) {
        console.log(error.message)
        res.json({success: false})
    }
})

module.exports = router;