const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const mongoConnect = require('./db.js')
dotenv.config();
mongoConnect();

app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(bodyParser.json());
const userRoutes = require('./Routes/UserRoutes.js')
const propertyRoute = require('./Routes/PropertyRoute.js')
const bookingRoute = require('./Routes/BookingRoute.js');

port = process.env.PORT || 8000;

app.use('/routes', userRoutes);
app.use('/property', propertyRoute);
app.use('/bookings', bookingRoute)


app.listen(port, ()=>{
    console.log(`Server is connected on port: ${port}`)
})