import React, { useEffect, useState } from "react";
// import logo from "./assets/logo/webscript.png";
import logo from "../../logo1.jpg";
import user from "./assets/user.jpg";
import './Sidemenu.css';
import MenuItem from "./MenuItem";
import CreateNewAlbum from "../PictureLibrary/CreateNewAlbum";
import Home from "../Home";
import AddImagesToAlbum from "../PictureLibrary/AddImagesToAlbum";
import BackgroundImages from "../PictureLibrary/BackgroundImages";
import ViewImagesInAlbum from "../PictureLibrary/ViewImagesInAlbum";
/**
 * @author
 * @function SideMenu
 **/
import TexttoText from '../Games/LineGame/TexttoText/TexttoText';
import ImagetoImage from '../Games/LineGame/ImagetoImage/ImagetoImage';
import TexttoImage from "../Games/LineGame/TexttoImage/TexttoImage";

// added more menuItems for testing
export const menuItems = [
    {
        name: "Home",
        exact: true,
        to: "/home",
        iconClassName: "bi bi-speedometer2",
        route: <Home />
    },
    {
        name: "Picture Library",
        exact: true,
        // to: `/picturelibrary`,
        iconClassName: "&#xF840;",
        subMenus: [
            { name: "Create New Album", to: "/create-album", route: <CreateNewAlbum /> },
            { name: "Add Images in Album", to: "/add-images", route: <AddImagesToAlbum /> },
            { name: "View Images in Album", to: "/view-images-in-album", route: <ViewImagesInAlbum /> },
        ],
    },
    { name: "Background Images", to: `/background-images`, iconClassName: "bi bi-vector-pen", route: <BackgroundImages /> },

    {
        name: "Line Game",
        exact: true,
        // to: `/content-2`,
        iconClassName: "bi bi-speedometer2",
        subMenus:
            [
                {
                    name: " Text to Image", to: "/line-game/text-to-image-newslide", route: <TexttoImage />
                },
                {
                    name: " Text to Text", to: "/line-game/text-to-text-newslide", route: <TexttoText />
                },
                {
                    name: " Image to Image", to: "/line-game/image-to-image-newslide", route: <ImagetoImage />
                },

            ],
    },
    { name: "Identification Game", to: "/identification-game" },
    { name: "Spellathon Game", to: "/spellathon-game" },
];

const SideMenu = ({ onCollapse }) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if (inactive) {
            removeActiveClassFromSubMenu();
        }

        onCollapse(inactive);
    }, [inactive, onCollapse]);

    //just an improvment and it is not recorded in video :(
    const removeActiveClassFromSubMenu = () => {
        document.querySelectorAll(".sub-menu").forEach((el) => {
            el.classList.remove("active");
        });
    };

    /*just a little improvement over click function of menuItem
      Now no need to use expand state variable in MenuItem component
    */
    useEffect(() => {
        let menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((el) => {
            el.addEventListener("click", (e) => {
                const next = el.nextElementSibling;
                removeActiveClassFromSubMenu();
                menuItems.forEach((el) => el.classList.remove("active"));
                el.classList.toggle("active");
                console.log(next);
                if (next !== null) {
                    next.classList.toggle("active");
                }
            });
        });
    }, []);

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="webscript" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                    {inactive ? (
                        <i className="bi bi-arrow-right-square-fill"></i>
                    ) : (
                        <i className="bi bi-arrow-left-square-fill"></i>
                    )}
                </div>
            </div>
            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <MenuItem
                            key={index}
                            name={menuItem.name}
                            exact={menuItem.exact}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            iconClassName={menuItem.iconClassName}
                            onClick={(e) => {
                                if (inactive) {
                                    setInactive(false);
                                }
                            }}
                        />
                    ))}


                </ul>
            </div>

            <div className="side-menu-footer">
                <div className="avatar">
                    <img src={user} alt="user" />
                </div>
                <div className="user-info">
                    <h5>Rizwan Khan</h5>
                    <p>rizwankhan@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;