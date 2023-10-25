import React, { useState } from 'react';
import SideMenu, { menuItems } from "./Components/Sidebar/SideMenu";
import CompileGame from './Components/Games/LineGame/CompileGame';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewSlides from './Components/Games/LineGame/ViewSlides';
import ViewGame from './Components/Games/LineGame/ViewGame';
import PrepareNewObjects from './Components/Games/IdentifyGame/PrepareNewObjects';
import ViewObjects from './Components/Games/IdentifyGame/ViewObjects';
// import Login from './Components/Login';

function App() {
  const [inactive, setInactive] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* {isLoggedIn ? ( */}
      <>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? 'inactive' : ''}`}>
          <Routes>
            {menuItems.map((menu) => (
              <Route key={menu.name} path={menu.to} element={menu.route} />
            ))}
            {menuItems.map((menu) =>
              menu.subMenus &&
                menu.subMenus.length > 0 ? (
                menu.subMenus.map((subMenu) => (
                  <Route key={subMenu.name} path={subMenu.to} element={subMenu.route} />
                ))
              ) : null
            )}
            <Route exact path="/line-game/text-to-image-compile" element={<CompileGame maintitle="[Text to Image]" navlink1="/line-game/text-to-image-newslide" navlink2="/line-game/text-to-image-viewslide" navlink3="/line-game/text-to-image-compile" navlink4="/line-game/text-to-image-viewgame" />} />
            <Route exact path="/line-game/text-to-text-compile" element={<CompileGame maintitle="[Text to Text]" navlink1="/line-game/text-to-text-newslide" navlink2="/line-game/text-to-text-viewslide" navlink3="/line-game/text-to-text-compile" navlink4="/line-game/text-to-text-viewgame" />} />
            <Route exact path="/line-game/image-to-image-compile" element={<CompileGame maintitle="[Image to Image]" navlink1="/line-game/image-to-image-newslide" navlink2="/line-game/image-to-image-viewslide" navlink3="/line-game/image-to-image-compile" navlink4="/line-game/image-to-image-viewgame" />} />
            <Route exact path="/line-game/text-to-image-viewslide" element={<ViewSlides maintitle="[Text to Image]" navlink1="/line-game/text-to-image-newslide" navlink2="/line-game/text-to-image-viewslide" navlink3="/line-game/text-to-image-compile" navlink4="/line-game/text-to-image-viewgame" />} />
            <Route exact path="/line-game/text-to-text-viewslide" element={<ViewSlides maintitle="[Text to Text]" navlink1="/line-game/text-to-text-newslide" navlink2="/line-game/text-to-text-viewslide" navlink3="/line-game/text-to-text-compile" navlink4="/line-game/text-to-text-viewgame" />} />
            <Route exact path="/line-game/image-to-image-viewslide" element={<ViewSlides maintitle="[Image to Image]" navlink1="/line-game/image-to-image-newslide" navlink2="/line-game/image-to-image-viewslide" navlink3="/line-game/image-to-image-compile" navlink4="/line-game/image-to-image-viewgame" />} />
            <Route exact path="/line-game/text-to-image-viewgame" element={<ViewGame maintitle="[Text to Image]" navlink1="/line-game/text-to-image-newslide" navlink2="/line-game/text-to-image-viewslide" navlink3="/line-game/text-to-image-compile" navlink4="/line-game/text-to-image-viewgame" />} />
            <Route exact path="/line-game/text-to-text-viewgame" element={<ViewGame maintitle="[Text to Text]" navlink1="/line-game/text-to-text-newslide" navlink2="/line-game/text-to-text-viewslide" navlink3="/line-game/text-to-text-compile" navlink4="/line-game/text-to-text-viewgame" />} />
            <Route exact path="/line-game/image-to-image-viewgame" element={<ViewGame maintitle="[Image to Image]" navlink1="/line-game/image-to-image-newslide" navlink2="/line-game/image-to-image-viewslide" navlink3="/line-game/image-to-image-compile" navlink4="/line-game/image-to-image-viewgame" />} />

            <Route exact path="/identify-game/prepare-new-objects" element={<PrepareNewObjects />} />
            <Route exact path="/identify-game/view-objects" element={<ViewObjects />} />
            <Route exact path="/identify-game/compile-object-game" element={<CompileGame descriptionforobject="Number of Objects" maintitle="Identify Game" navlink1="/identify-game/prepare-new-objects" navlink2="/identify-game/view-objects" navlink3="/identify-game/compile-object-game" navlink4="/identify-game/view-object-game" />} />
            <Route exact path="/identify-game/view-object-game" element={<ViewGame maintitle="Identify Game" navlink1="/identify-game/prepare-new-objects" navlink2="/identify-game/view-objects" navlink3="/identify-game/compile-object-game" navlink4="/identify-game/view-object-game" />} />


          </Routes>
        </div>
      </>
      {/* ) : ( */}
      <Routes>
        {/* <Route exact path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
      </Routes>
      {/* )} */}

    </BrowserRouter>
  );
}

export default App;
