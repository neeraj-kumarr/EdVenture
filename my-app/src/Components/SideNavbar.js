import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FilterBAndWRoundedIcon from '@mui/icons-material/FilterBAndWRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';

import { Link } from "react-router-dom";
import logo from '../../src/logowhite.png'

const pictureLibraryDropdownItems = [
    {
        to: "/create-album",
        text: "Create New Album",
    },
    {
        to: "/add-images",
        text: "Add Images to Album",
    },
    {
        to: "/view-images-in-album",
        text: "View Images in Album",
    },
];

const gamesDropdownItems = [
    {
        to: "/line-game/text-to-image-newslide",
        text: "Text to Image",
    },
    {
        to: "/line-game/text-to-text-newslide",
        text: "Text to Text",
    },
    {
        to: "/line-game/image-to-image-newslide",
        text: "Image to Image",
    },
    {
        to: "/line-game/identification-game",
        text: "Identification Game",
    },
    {
        to: "/line-game/spellathon",
        text: "Spellathon",
    },
];

export default function SideNavbar() {

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

            <div className="   d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 sidebar">
                <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline border-bottom border-warning"><img src={logo} alt="logo" className="w-75" /></span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link align-middle px-0">
                            {<GridViewRoundedIcon />} <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            {<AddPhotoAlternateRoundedIcon />}             <span className="ms-1 d-none d-sm-inline mx-3">Picture Library</span>{" "}
                        </Link>
                        {pictureLibraryDropdownItems.map((item, index) => (
                            <li key={index} className="w-100">
                                <Link to={item.to} className="nav-link px-0">
                                    {" "}
                                    <span className="d-none d-sm-inline picmenu">➣ {item.text}</span>{" "}
                                </Link>
                            </li>
                        ))}
                    </li>
                    <li>
                        <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            {<SportsEsportsRoundedIcon />} <span className="ms-1 d-none d-sm-inline ">Games</span> {" "} </Link>
                        <ul className="collapse show nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            {/* <li>
                                <Link to="/prepare-new-slide" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">➣ Line Game</span> </Link>
                            </li> */}
                            {gamesDropdownItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.to} className="nav-link px-0">
                                        {" "}
                                        <span className="d-none d-sm-inline gamemenu">{`➣ ${item.text}`}</span>{" "}
                                    </Link>
                                </li>
                            ))}
                            {/* <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline gamemenu ">➣ Identification Game</span> </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline gamemenu">➣ Spellathon</span> </Link>
                            </li> */}

                        </ul>
                    </li>
                    <li>
                        <Link to="/background-images" className="nav-link px-0 align-middle">
                            {<FilterBAndWRoundedIcon />}<span className="ms-1 d-none d-sm-inline">Background Images</span></Link>
                    </li>
                    <li>
                        <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            {<VolumeUpRoundedIcon />} <span className="ms-1 d-none d-sm-inline">Sound Library</span></Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">Item</span> 1</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">Item</span> 2</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" to="/">New project...</Link></li>
                        <li><Link className="dropdown-item" to="/">Settings</Link></li>
                        <li><Link className="dropdown-item" to="/">Profile</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="/">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div >


    )
}