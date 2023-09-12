// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Login from './Components/Login';
// import Navigation from './Components/Navigation';

// function App() {
//   return (
//     <>
//       <div className='App'>
//         <BrowserRouter>
//           <Routes>

//             <Route exact path="/" element={<Navbar />} />
//             <Route exact path="/login" element={<Login />} />
//             <Route exact path="/navigation" element={<Navigation />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

// export default App;
// import './App.css'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/navigation" element={<Navigation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;