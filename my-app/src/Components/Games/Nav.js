import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light p-2">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav px-4 ">
                    <li className="nav-item active px-3">
                        <Link className="nav-link" to="/prepare-new-slide">
                            {props.title1}
                        </Link>
                    </li>
                    {/* Prepare New Slide | View Slides | Compile Game | View Games */}
                    <li className="nav-item active px-3">
                        <Link className="nav-link" to="/">
                            {props.title2}
                        </Link>
                    </li>
                    <li className="nav-item active px-3">
                        <Link className="nav-link" to="/">
                            {props.title3}
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/">
                            {props.title4}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Nav.propTypes = {
    title1: propTypes.string,
    title2: propTypes.string,
    title3: propTypes.string,
    title4: propTypes.string,
}

// If no title is given
Nav.defaultProps = {
    title1: 'Enter 1st title here',
    title2: 'Enter 2nd title here',
    title3: 'Enter 3rd title here',
    title4: 'Enter 4th title here',
}
