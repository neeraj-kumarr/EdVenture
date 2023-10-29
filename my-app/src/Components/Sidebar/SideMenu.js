import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import logo from "../../logo.png";
import './Sidemenu.css';
import MenuItem from "./MenuItem";
import Home from "../Home";
import CreateNewAlbum from "../PictureLibrary/CreateNewAlbum";
import AddImagesToAlbum from "../PictureLibrary/AddImagesToAlbum";
import BackgroundImages from "../PictureLibrary/BackgroundImages";
import ViewImagesInAlbum from "../PictureLibrary/ViewImagesInAlbum";
import TexttoText from '../Games/LineGame/TexttoText';
import ImagetoImage from '../Games/LineGame/ImagetoImage';
import TexttoImage from "../Games/LineGame/TexttoImage";
import PrepareNewObject from "../Games/IdentifyGame/PrepareNewObjects";



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

    { name: "Identification Game", to: "/identify-game/prepare-new-objects", route: <PrepareNewObject /> },
    { name: "Spellathon Game", to: "/spellathon-game" },
];





const SideMenu = () => {
    const [inactive, setInactive] = useState(false);
    const location = useLocation()


    const findMenuItemName = (path, items) => {

        for (const item of items) {
            if (item.to === path) {
                return item.name;
            }
            if (item.subMenus) {
                const submenuMatch = findMenuItemName(path, item.subMenus);
                if (submenuMatch) {
                    return submenuMatch;
                }
            }
        }
        return null;
    };

    const pageTitle = findMenuItemName(location.pathname, menuItems) || 'Edventure';

    const removeActiveClassFromSubMenu = () => {
        document.querySelectorAll(".sub-menu").forEach((el) => {
            el.classList.remove("active");
        });
    };

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
                    {menuItems.map((menuItem) => (
                        <MenuItem
                            key={menuItem.name}
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

            <div className="user-info">
                <button className="btn btn-secondary" >Logout </button>
            </div>
            {/* Use Helmet to update the title */}
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
        </div>
    );
};

export default SideMenu;