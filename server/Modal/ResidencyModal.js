const mongoose = require('mongoose')

const {Schema} = mongoose;

const ResidencySchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    
    image: {
        type: String,
        // required: true,
    },
    userEmail: {
        type: String,
        // required: true,
    },
    facilities:{
        type: Object,
        required: true,
    },
    owner: {
        type:String,
    },
    createdAt:{
        type: Date,
    },
    updatedAt:{
        type: Date,
    }
})

module.exports = mongoose.model('residencies', ResidencySchema)