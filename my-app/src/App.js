import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import Login from './Components/Login';
import Home from "./Components/Home";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {isLoggedIn && <Route exact path='/home' element={<Home />} />}
        <Route exact path='/home' element={<Home />} />
        <Route exact path="/create-album" element={<CreateNewAlbum />} />
        <Route exact path="/add-images" element={<AddImagesToAlbum />} />
        <Route exact path="/view-images-in-album" element={<ViewImagesInAlbum />} />
        <Route exact path="/background-images" element={<BackgroundImages />} />

        <Route exact path="/line-game/text-to-image-newslide" element={<TexttoImageNewSlide />} />
        <Route exact path="/line-game/text-to-image-compile" element={<TexttoImageCompile />} />
        <Route exact path="/line-game/text-to-text-newslide" element={<TexttoTextNewSlide />} />
        <Route exact path="/line-game/text-to-text-compile" element={<TexttoTextCompile />} />
        <Route exact path="/line-game/image-to-image-newslide" element={<ImagetoImageNewSlide />} />
        <Route exact path="/line-game/image-to-image-compile" element={<ImagetoImageCompile />} />
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <ThemeContext.Provider value={{ setTheme, theme }}>
  //     <ThemeProvider theme={themeStyle}>
  //       <GlobalStyle />
  //       <Helmet>
  //         <title>Sidebar - Code Focus</title>
  //         <link rel="preconnect" href="https://fonts.googleapis.com" />
  //         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  //         <link
  //           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
  //           rel="stylesheet"
  //         />
  //       </Helmet>
  //       <>
  //         <Router>
  //           <Layout>
  //             <PathRoutes />
  //           </Layout>
  //         </Router>
  //       </>
  //     </ThemeProvider>
  //   </ThemeContext.Provider>

  // );
}

export default App;