import React, { useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username:"",
    password:"",
  })

  const onchange = (e) => {
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  const onchange1 = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    // console.log(credentials)

    const response = await fetch('http://localhost:5000/routes/loginuser',{
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      })
    })

    const json = await response.json();
    if(!json.success){
      if(json.message){
        alert("Invalid Credentials")
      }else{
        alert("Server error, Please try after some time")
      }
    }

    if(json.success){
      localStorage.setItem("authToken", json.authToken)
      localStorage.setItem("mail", json.mail)
      navigate('/');
    }

  }

  return (
    <div className='wrapper'>
        <div className='l-card flexColCenter innerWidth paddings'>
          <div className="img-container">
            <img src='./favicon.jpg' alt='' />
          </div>
          <h1>Real Estate</h1>
          <form onSubmit={handleSubmit}>
            <input type='text' name="username" placeholder='Username...' onChange={onchange}/>
            <input type='password' name='password' placeholder='password...' onChange={onchange}/>
            <button className='button' type='submit'>Sign In</button>
          </form>
          <div className="line"></div>
          <Link className='button1' to={"/register"}>New User? Sign Up</Link>
        </div>
    </div>
  )
}

export default Login