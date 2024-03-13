import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Website from "./pages/Website"
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Properties from './pages/Properties/Properties.jsx'
import AddProperty from "./Components/AddProperty/AddProperty.jsx"
import Layout from './Components/Layout/Layout.jsx'
import { UserContext } from './Context/userContext.jsx'
import "./App.css"
import Property from './pages/Property/Property.jsx'
import {MantineProvider} from "@mantine/core"

const App = () => {
  return (
    <UserContext>
      <MantineProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Website />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              {/* <Route path='/addproperty' element={<AddProperty />} /> */}
              <Route>
                <Route path='/properties' element={<Properties />} />
                <Route path='/properties/:propertyid' element={<Property />} />
              </Route>
            </Route> 
          </Routes>
        </Router>
      </MantineProvider>
    </UserContext>
  )
}

export default App