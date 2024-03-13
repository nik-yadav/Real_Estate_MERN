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

export {loadProperty}