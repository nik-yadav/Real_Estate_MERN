const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    bookedVisits:{
        type: Array,
    },
    favResidenciesid:{
        type: String,
    }
})

module.exports = mongoose.model('user', UserSchema)