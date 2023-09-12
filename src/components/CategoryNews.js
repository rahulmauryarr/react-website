import React from 'react'
import { NavLink } from 'react-router-dom'


export default function CategoryNews() {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/business">Business</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/health">Health</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/science">Science</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/sports">Sports</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/technology">Technology</NavLink>
                </li>
            </ul>
        </>
    )
}


