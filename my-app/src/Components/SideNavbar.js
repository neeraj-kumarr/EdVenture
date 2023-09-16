import React, { useState } from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FilterBAndWRoundedIcon from '@mui/icons-material/FilterBAndWRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import CreateNewAlbum from "./PictureLibrary/CreateNewAlbum";
import ViewAlbums from "./PictureLibrary/ViewAlbums";
import AddImagesToAlbum from "./PictureLibrary/AddImagesToAlbum";
import ViewImagesInAlbum from "./PictureLibrary/ViewImagesInAlbum";

export default function SideNavbar() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar className="app " collapsed={collapsed}>
                <Menu >
                    <MenuItem
                        component={<Link to="/" className="link" />}
                        className="menu1"
                        icon={<MenuRoundedIcon
                            onClick={toggleSidebar}
                        />}
                    >
                        <h2>EdVenture</h2>
                    </MenuItem>
                    <MenuItem
                        component={<Link to="/dashboard" className="link" />}
                        icon={<GridViewRoundedIcon />}
                    >
                        Dashboard
                    </MenuItem>
                    <SubMenu label="Games" icon={<SportsEsportsRoundedIcon />}>
                        <MenuItem >Line Game</MenuItem>
                        <MenuItem >Spellathon Game</MenuItem>
                        <MenuItem >Identification Game</MenuItem>
                    </SubMenu>
                    <SubMenu label="Picture Library" icon={<AddPhotoAlternateRoundedIcon />}>
                        <MenuItem
                            component={<Link to="/create-album" className="link" />}
                        >
                            Create New Album
                        </MenuItem>
                        <MenuItem
                            component={<Link to="/view-albums" className="link" />}
                        >
                            View Albums
                        </MenuItem>
                        <MenuItem
                            component={<Link to="/add-images" className="link" />}
                        >
                            Add Images to Album
                        </MenuItem>
                        <MenuItem
                            component={<Link to="/view-images-in-album" className="link" />}
                        >
                            View Images in Album
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="Sound Library" icon={<VolumeUpRoundedIcon />}>
                        <MenuItem> Item 1 </MenuItem>
                        <MenuItem> Item 2 </MenuItem>
                    </SubMenu>
                    <SubMenu label="Background Images" icon={<FilterBAndWRoundedIcon />}>
                        <MenuItem> Item 1 </MenuItem>
                        <MenuItem> Item 2 </MenuItem>
                    </SubMenu>
                    <MenuItem
                        component={<Link to="/transactions" className="link" />}
                        icon={<MonetizationOnRoundedIcon />}
                    >
                        Transactions
                    </MenuItem>
                    <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
                        <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
                        <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
                        <MenuItem icon={<NotificationsRoundedIcon />}>
                            Notifications
                        </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
                </Menu>
            </Sidebar>
            <section style={{ flex: 1 }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/transactions" element={<Transactions />} />
                    <Route path="/create-album" element={<CreateNewAlbum />} />
                    <Route path="/view-albums" element={<ViewAlbums />} />
                    <Route path="/add-images" element={<AddImagesToAlbum />} />
                    <Route path="/view-images-in-album" element={<ViewImagesInAlbum />} />
                </Routes>
            </section>
        </div>
    )
}
