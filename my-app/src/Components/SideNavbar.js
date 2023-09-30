import React, { useState } from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FilterBAndWRoundedIcon from '@mui/icons-material/FilterBAndWRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
// import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
// import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
// import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from '../../src/logowhite.png'

export default function SideNavbar() {
    // const [collapsed, setCollapsed] = useState(false);
    // const toggleSidebar = () => {
    //     setCollapsed(!collapsed);
    // };
    // const sidebarHoverStyle = {
    //     backgroundColor: '#007bff', // Change the background color on hover
    //     transition: 'background-color 0.3s', // Add a smooth transition
    // };
    return (
        // <Sidebar className=" text-white border-end  border-secondary " collapsed={collapsed} backgroundColor="black" >
        //     <Menu >
        //         <MenuItem
        //             component={<Link to="/home" className="link" />}
        //             className="menu1"
        //             icon={<MenuRoundedIcon
        //                 onClick={toggleSidebar}
        //             />}
        //         >
        //             <img
        //                 style={{ width: '100%' }} src={logo} alt="logo" />
        //             {/* <h2>EdVenture</h2> */}
        //         </MenuItem>
        //         <MenuItem

        //             component={<Link to="/dashboard" className="link" />}
        //             icon={<GridViewRoundedIcon />}
        //             activeclassname='active'

        //         >
        //             Dashboard
        //         </MenuItem>
        //         <SubMenu label="Games" icon={<SportsEsportsRoundedIcon />}>
        //             <MenuItem component={<Link to="/prepare-new-slide" className="link" />} >Line Game</MenuItem>
        //             <MenuItem >Spellathon Game</MenuItem>
        //             <MenuItem >Identification Game</MenuItem>
        //         </SubMenu>
        //         <SubMenu label="Picture Library" backgroundColor="black" icon={<LinkddPhotoAlternateRoundedIcon />}>
        //             <MenuItem
        //                 component={<Link to="/create-album" className="link" />}
        //             >
        //                 Create New Album
        //             </MenuItem>

        //             <MenuItem
        //                 component={<Link to="/add-images" className="link" />}
        //             >
        //                 Add Images to Album
        //             </MenuItem>
        //             <MenuItem
        //                 component={<Link to="/view-images-in-album" className="link" />}
        //             >
        //                 View Images in Album
        //             </MenuItem>
        //         </SubMenu>
        //         <SubMenu label="Sound Library" icon={<VolumeUpRoundedIcon />}>
        //             <MenuItem> Item 1 </MenuItem>
        //             <MenuItem> Item 2 </MenuItem>
        //         </SubMenu>
        //         <MenuItem icon={<FilterBAndWRoundedIcon />}
        //             component={<Link to="/background-images" className="link" />}

        //         >Background Images
        //         </MenuItem>
        //         <MenuItem
        //             component={<Link to="/transactions" className="link" />}
        //             icon={<MonetizationOnRoundedIcon />}
        //         >
        //             Transactions
        //         </MenuItem>
        //         <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
        //             <MenuItem icon={<LinkccountCircleRoundedIcon />}> Account </MenuItem>
        //             <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
        //             <MenuItem icon={<NotificationsRoundedIcon />}>
        //                 Notifications
        //             </MenuItem>
        //         </SubMenu>
        //         <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        //     </Menu>


        // </Sidebar>

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
                            {<AddPhotoAlternateRoundedIcon />} <span className="ms-1 d-none d-sm-inline mx-3">Picture Library</span> </Link>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/create-album" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">➣ Create New Album</span> </Link>
                            </li>
                            <li>
                                <Link to="/add-images" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">➣ Add Images to Album</span>  </Link>
                            </li>
                            <li>
                                <Link to="/view-images-in-album" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">➣ View Images in Album</span>  </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            {<SportsEsportsRoundedIcon />} <span className="ms-1 d-none d-sm-inline ">Games</span> </Link>
                        <ul className="collapse show nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            {/* <li>
                                <Link to="/prepare-new-slide" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">➣ Line Game</span> </Link>
                            </li> */}
                            <li>
                                <Link to="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <span className="ms-1 d-none d-sm-inline mx-3 sublink">➣ Line Game</span> </Link>
                                <ul className="collapse show nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                                    <li>
                                        <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline px-5">➣ Text to Image </span>  </Link>
                                    </li>
                                    <li className="w-100">
                                        <Link to="/prepare-new-slide" className="nav-link px-0"> <span className="d-none d-sm-inline px-5">➣ Text to Text </span> </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline px-5">➣ Image to Image  </span>  </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">➣ Identification Game</span> </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link px-0"> <span className="d-none d-sm-inline sublink">➣ Spellathon</span> </Link>
                            </li>

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
