const loadProperty = async(id) => {
    const response = await fetch(`http://localhost:5000/property/properties/${id}`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const json = await response.json();
    if(!json.success){
        console.log("Unable to get data")
    }
    if(json.success){
        // console.log(json.userData)
        return json.userData;
    }
}

const bookingData = async(email) => {
    const responsive = await fetch(`http://localhost:5000/bookings/book`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "email": email,
        })
    })
    const jeson = await responsive.json();
    if(!jeson.success){
        console.log("Unable to get data")
    }
    if(jeson.success){
        if(jeson.message){
            console.log("no data")
            return []
        }else{
            return jeson.data
        }
    }
}

const deletionbooking = async(deleteid) => {
    const email = localStorage.getItem('email')
    const responsive = await fetch(`http://localhost:5000/bookings/delete/${deleteid}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "email": email,
        })
    })
    const jeson = await responsive.json();
    if(!jeson.success){
        console.log("Server Error")
    }
    if(jeson.success){
        console.log("Booking Deleted")
    }
}

export {loadProperty, bookingData, deletionbooking}