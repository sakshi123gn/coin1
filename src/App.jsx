import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx"
import Home from "./components/Home.jsx"
import Crypto from './components/Cropto.jsx'
import Shaksi from './components/support.jsx'
import Services from "./components/services.jsx"
import Login from "./forms/Login.jsx"
import Signup from "./forms/Signup.jsx"
import Navbar1 from "./userpannel/navbar1/Navbar1.jsx"
import Dashboard from './userpannel/dashboard/Dashboard.jsx';

import Buy from './userpannel/dashboard/Buy.jsx';
import Sell from './userpannel/dashboard/Sell.jsx';
import Swap from './userpannel/dashboard/Swap.jsx';
import Transfer from './userpannel/dashboard/Transfer.jsx';
const App = () => {
  const currentPath = window.location.pathname;
  let navbarComponent;

  if (currentPath === '/') {
    navbarComponent = <Navbar />;
  } else if (currentPath === '/dashboard') {
    navbarComponent = <Navbar1 />;
  } 
  return (
        <>
        <Router>

        
   
        {navbarComponent}
            

          <div className='h-16' ></div>
              <Routes>
                   <Route path="/" element={<Home /> } />
                   <Route path="/crypto" element={<Crypto />} />
                   <Route path="/support" element={<Shaksi />} />
                   <Route path="/signup" element={<Signup />} />
                   <Route path="/login" element={<Login />} />
                   <Route path="/services" element={<Services />} />
                   <Route path="/dashboard" element={<Dashboard />} />
                   
                   <Route path="/buy" element={<Buy />} />
                   <Route path="/sell" element={<Sell />} />
                   <Route path="/swap" element={<Swap />} />
                   <Route path="/transfer" element={<Transfer />} />

              </Routes>

          </Router>
        </>
  )
}

export default App