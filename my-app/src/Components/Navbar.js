import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png'
export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#"><img src={logo} alt="" srcset="" height={50} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="mx-3 nav-link" activeClassName='active' aria-current="page" href="#">English</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" activeClassName='active' href="#">Urdu</a>
                        </li>
                        <li className="nav-item">
                            <a className=" mx-3 nav-link" activeClassName='active' href="#">Math</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" activeClassName='active' href="#">Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" activeClassName='active' href="#">Social Study</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-3 nav-link" activeClassName='active' href="#">Drawing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="mx-3 dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-outline-dark" type="submit">Log Out</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
