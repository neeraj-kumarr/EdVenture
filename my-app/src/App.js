import React from 'react';
import './App.css';
// import SideNavbar from './Components/SideNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='login' element={<Login />} />
        </Routes>        </BrowserRouter>
    </>
  );
}

export default App;