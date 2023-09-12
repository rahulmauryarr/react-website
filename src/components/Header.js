
import React from 'react'
import PropTypes from 'prop-types';
import Darkmode from './Darkmode';
import {NavLink } from "react-router-dom";

export default function Header(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#" onClick={e => e.preventDefault()}>
                    <img src={props.logo} alt="" width="30" height="24" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">{props.item2}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/text_utils">{props.item1}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/todo">{props.item3}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/password-genrator">{props.item4}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/clock">{props.item5}</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink  className="nav-link" to="/user-list">User List</NavLink>
                        </li> */}
                    </ul>
                    <Darkmode dynamicAlert={props.dynamicAlert}/>
                </div>
            </div>
        </nav>
        </>
    )
}

Header.defaultProps = {
    item1: 'Home'
};
Header.propTypes = {
    item1: PropTypes.string,
    item2: PropTypes.string,
    item3: PropTypes.string,
    item4: PropTypes.string,
}