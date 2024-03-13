import React, { useEffect, useState } from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import {BiMenuAltRight} from 'react-icons/bi'
import {useAuth0} from "@auth0/auth0-react"
import Login from "../Login/Login.jsx"
import {Avatar} from "@mui/material"

import "./Header.css"
import AddProperty from '../AddProperty/AddProperty.jsx'

const Header = () => {

    const [modalOpened, setModalOpened] = useState(false);

    const navigate = useNavigate();

    const handleaddpropertyClick = () =>{
        setModalOpened(true)
    }

  return (
    <section className='h-wrapper'>
        <div className='flexCenter innerWidth paddings h-container'>
            <Link to="/">
                <img src='./logo.png' alt='logo' width={100} />
            </Link>

            <div className='flexCenter h-menu'>
                <NavLink to="/properties">Properties</NavLink>
                <a href='nikhil.yadav.a12@gmail.com'>Contact</a>
                <div onClick={handleaddpropertyClick}>Add Property</div>
                <AddProperty  opened={modalOpened} setOpened={setModalOpened} />
                {/* <button className='button' onClick={()=>navigate('/login')}>Login</button> */}

                {!localStorage.getItem('authToken')?
                    (
                        <button className='button' onClick={()=>navigate('/login')}>Login</button>
                    )
                    :(
                        <Avatar src="/broken-image.jpg" />
                    )}

                    {/* <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div> */}
            </div>
        </div>
    </section>
  )
}

export default Header