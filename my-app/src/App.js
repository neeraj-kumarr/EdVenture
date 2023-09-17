import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import SideNavbar from './Components/SideNavbar';
import Navbar from './Components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn && <Route exact path='/sidenavbar' element={<SideNavbar />} />}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;