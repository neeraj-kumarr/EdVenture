import React from 'react'
import logoImage from '../images/logo.png';
// import Background from '../images/Background Signup.png'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <Link to="/">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logoImage} alt="logo" width="150" height="50" />

                    <Link to="/login">
                        <button type="button" className="btn btn-dark">Log In</button>
                    </Link>
                </div>
            </nav >
        </Link>
    )
}
