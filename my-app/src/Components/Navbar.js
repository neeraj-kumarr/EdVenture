import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png'
export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#292929' }}>
            <div className="container-fluid ">
                <Link className="navbar-brand" to="#"><img src={logo} alt="" srcset="" height={50} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item " >
                            <Link className="mx-3 nav-link text-light" activeClassName='active' aria-current="page" to="#">English</Link>
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
                                Dropdown
                            </Link>
                            <ul className="mx-3 dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
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
