import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx"
import Home from "./components/Home.jsx"
import Crypto from './components/Cropto.jsx'
import Shaksi from './components/support.jsx'
import Services from "./components/services.jsx"
import Login from "./forms/Login.jsx"
import Signup from "./forms/Signup.jsx"


const App = () => {
  return (
        <>
        <Router>

          <Navbar />
          <div className='h-16' ></div>
              <Routes>
                   <Route path="/" element={<Home /> } />
                   <Route path="/crypto" element={<Crypto />} />
                   <Route path="/support" element={<Shaksi />} />
                   <Route path="/signup" element={<Signup />} />
                   <Route path="/login" element={<Login />} />
                   <Route path="/services" element={<Services/>} />
            
              </Routes>

          </Router>
        </>
  )
}

export default App