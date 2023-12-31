import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const navStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 1000, // Adjust the z-index as needed
        background: '#e0ebeb', // Set the background color as desired
        border: '1px solid lightgray',
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light p-2" style={navStyle}>
            <h2 className="m-1 navbar-brand" style={{ fontFamily: ' Lucida Console' }}>{props.maintitle}</h2>

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
                    <li className="nav-item  px-3">
                        <Link className="nav-link" to={props.navlink1}>
                            {props.title1}
                        </Link>
                    </li>
                    <li className="nav-item  px-3">
                        <Link className="nav-link" to={props.navlink2}>
                            {props.title2}
                        </Link>
                    </li>
                    <li className="nav-item  px-3">
                        <Link className="nav-link" to={props.navlink3}>
                            {props.title3}
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to={props.navlink4}>
                            {props.title4}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Nav.propTypes = {
    maintitle: propTypes.string,
    title1: propTypes.string,
    title2: propTypes.string,
    title3: propTypes.string,
    title4: propTypes.string,
    navlink1: propTypes.string,
    navlink2: propTypes.string,
    navlink3: propTypes.string,
    navlink4: propTypes.string,
}

// If no title is given
Nav.defaultProps = {
    maintitle: 'Enter Main title here',
    title1: 'Enter 1st title here',
    title2: 'Enter 2nd title here',
    title3: 'Enter 3rd title here',
    title4: 'Enter 4th title here',
    navlink1: 'Enter 1st navlink here',
    navlink2: 'Enter 2nd navlink here',
    navlink3: 'Enter 3rd navlink here',
    navlink4: 'Enter 4th navlink here',

}
