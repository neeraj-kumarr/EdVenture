import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" width="150" height="50" />
                <Link to='/login'>
                    <button type="button" className="btn btn-dark">Log In</button>
                </Link>
            </div>
        </nav >
    )
}
