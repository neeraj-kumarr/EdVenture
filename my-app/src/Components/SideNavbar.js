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
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from '../../src/logo.png'

export default function SideNavbar() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Sidebar className="app " collapsed={collapsed}>
            <Menu >
                <MenuItem
                    component={<Link to="/home" className="link" />}
                    className="menu1"
                    icon={<MenuRoundedIcon
                        onClick={toggleSidebar}
                    />}
                >
                    <img
                        style={{ width: '100%' }} src={logo} alt="logo" />
                    {/* <h2>EdVenture</h2> */}
                </MenuItem>
                <MenuItem

                    component={<Link to="/dashboard" className="link" />}
                    icon={<GridViewRoundedIcon />}
                >
                    Dashboard
                </MenuItem>
                <SubMenu label="Games" icon={<SportsEsportsRoundedIcon />}>
                    <MenuItem component={<Link to="/line-game" className="link" />} >Line Game</MenuItem>
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
                <MenuItem icon={<FilterBAndWRoundedIcon />}
                    component={<Link to="/background-images" className="link" />}


                >Background Images
                </MenuItem>
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

    )
}
