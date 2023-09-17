import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Transactions from "./Components/Transactions";
import CreateNewAlbum from "./Components/PictureLibrary/CreateNewAlbum";
import ViewAlbums from "./Components/PictureLibrary/ViewAlbums";
import AddImagesToAlbum from "./Components/PictureLibrary/AddImagesToAlbum";
import ViewImagesInAlbum from "./Components/PictureLibrary/ViewImagesInAlbum";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route exact path='login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {isLoggedIn && <Route exact path='/home' element={<Home />} />}

          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/create-album" element={<CreateNewAlbum />} />
          <Route exact path="/view-albums" element={<ViewAlbums />} />
          <Route exact path="/add-images" element={<AddImagesToAlbum />} />
          <Route exact path="/view-images-in-album" element={<ViewImagesInAlbum />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;