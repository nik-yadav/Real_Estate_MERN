import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Auth0Provider} from "@auth0/auth0-react"
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)

{/* <Auth0Provider
    domain="dev-th116y5xfij1m438.us.auth0.com"
    clientId="IDaNHu0MIidWZ3uGRMcRp6GsXcKwB7tJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    ></Auth0Provider> */}
