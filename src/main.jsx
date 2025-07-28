import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css";
import "./styles/global.css";  // <-- your global styles
import App from "./LandingPage.jsx";  // <-- imports your landing page as main app

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
