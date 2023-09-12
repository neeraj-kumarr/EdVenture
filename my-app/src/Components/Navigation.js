import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Navbar from './Navbar';
// import { Link } from 'react-router-dom';
// import logoImage from '../images/logo.png';
// import Navbar from './Navbar';

export default function Navigation() {
    return (
        <>
            <Sidebar>
                <Menu>
                    <MenuItem> Home </MenuItem>
                    <SubMenu label="Games">
                        <MenuItem> Line Game </MenuItem>
                        <MenuItem> Identification Game </MenuItem>
                        <MenuItem> Spellathon </MenuItem>
                    </SubMenu>
                    <SubMenu label="Sound Library">
                        <MenuItem> Item 1 </MenuItem>
                        <MenuItem> Item 2 </MenuItem>
                    </SubMenu>
                    <SubMenu label="Background Pictures">
                        <MenuItem> Item 1 </MenuItem>
                        <MenuItem> Item 2 </MenuItem>
                    </SubMenu>
                    <SubMenu label="Picture Library">
                        <MenuItem> Item 1 </MenuItem>
                        <MenuItem> Item 2 </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar></>

    )
}
