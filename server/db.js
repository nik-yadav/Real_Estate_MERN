const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const mongoURL = process.env.URL;

const mongoConnect = async() => {
    try{
        await mongoose.connect(mongoURL, 
        //     {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }
        );
        console.log("Connected to Database");
    } catch(err){
        console.log(mongoURL)
        console.error("Database Connection Error: ",err)
    }
}

module.exports = mongoConnect;