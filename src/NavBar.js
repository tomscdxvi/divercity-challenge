import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <ul className="nav navbar-nav list-group list-group-horizontal-sm">
            <li className="nav-item d-inline ml-auto list-group-item">
                <Link to="/" className="nav-link text-dark">
                    Home
                </Link>
            </li>
            <li className="nav-item ml-4 list-group-item">
                <Link to="/register" className="nav-link text-dark">
                    Register
                </Link>
            </li>
            <li className="nav-item ml-4 list-group-item">
                <Link to="/login" className="nav-link text-dark">
                    Login
                </Link>
            </li>
        </ul>
    )
}
