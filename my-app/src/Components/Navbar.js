import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { Avatar } from '@mui/material';
export default function Navbar() {

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light shadow " style={{ backgroundColor: '#292929' }}>
            <div className="container-fluid ">
                <Link className="navbar-brand" to="#"><img src={logo} alt="" srcset="" height={50} /></Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item " >
                            <Link className="mx-3 nav-link text-light" activeClassName='active' aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item " >
                            <Link className="mx-3 nav-link text-light" activeClassName='active' aria-current="page" to="/english">English</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-3 nav-link  text-light" activeClassName='active' to="#">Urdu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className=" mx-3 nav-link text-light" activeClassName='active' to="#">Math</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-3 nav-link text-light" activeClassName='active' to="#">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-3 nav-link text-light" activeClassName='active' to="#">Social Study</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-3 nav-link text-light" activeClassName='active' to="#">Drawing</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Student
                            </Link>
                            <ul className="mx-3 dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item d-flex justify-content-around align-items-center " to="#"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    Student A</Link></li>
                                <li><hr className="dropdown-divider" /></li>

                                <li><Link className="dropdown-item d-flex justify-content-around align-items-center" to="#"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    Student B</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item d-flex justify-content-around align-items-center" to="#"><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    Student C</Link></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex">

                        <button className="btn btn-outline-light  " type="submit">
                            Log Out</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
