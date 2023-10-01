// eslint-disable-next-line
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import Login from './Components/Login';
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Transactions from "./Components/Transactions";
// PictureLibary
import CreateNewAlbum from "./Components/PictureLibrary/CreateNewAlbum";
import AddImagesToAlbum from "./Components/PictureLibrary/AddImagesToAlbum";
import ViewImagesInAlbum from "./Components/PictureLibrary/ViewImagesInAlbum";
import BackgroundImages from './Components/PictureLibrary/BackgroundImages';
// Line Game

import TexttoImageNewSlide from './Components/Games/LineGame/TexttoImage/TexttoImageNewSlide'
import TexttoImageCompile from './Components/Games/LineGame/TexttoImage/TexttoImageCompile'
import TexttoTextNewSlide from './Components/Games/LineGame/TexttoText/TexttoTextNewSlide';
import TexttoTextCompile from './Components/Games/LineGame/TexttoText/TexttoTextCompile';
import ImagetoImageNewSlide from './Components/Games/LineGame/ImagetoImage/ImagetoImageNewSlide';
import ImagetoImageCompile from './Components/Games/LineGame/ImagetoImage/ImagetoImageCompile';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/' element={<Navbar />} /> */}
          <Route exact path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {isLoggedIn && <Route exact path='/home' element={<Home />} />}
          <Route exact path='/home' element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/create-album" element={<CreateNewAlbum />} />
          <Route exact path="/add-images" element={<AddImagesToAlbum />} />
          <Route exact path="/view-images-in-album" element={<ViewImagesInAlbum />} />
          <Route exact path="/background-images" element={<BackgroundImages />} />

          <Route exact path="/text-to-image-newslide" element={<TexttoImageNewSlide />} />
          <Route exact path="/text-to-image-compile" element={<TexttoImageCompile />} />
          <Route exact path="/text-to-text-newslide" element={<TexttoTextNewSlide />} />
          <Route exact path="/text-to-text-compile" element={<TexttoTextCompile />} />
          <Route exact path="/image-to-image-newslide" element={<ImagetoImageNewSlide />} />
          <Route exact path="/image-to-image-compile" element={<ImagetoImageCompile />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;