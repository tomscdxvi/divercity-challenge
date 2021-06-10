import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <ul className="nav navbar-nav">
            <li className="nav-item ml-auto">
                <Link to="/" className="nav-link text-dark">
                    Home
                </Link>
            </li>
            <li className="nav-item ml-auto">
                <Link to="/register" className="nav-link text-dark">
                    Register
                </Link>
            </li>
            <li className="nav-item ml-auto">
                <Link to="/login" className="nav-link text-dark">
                    Login
                </Link>
            </li>
        </ul>
    )
}
