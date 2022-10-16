import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo2.jpg'

export default function NavBar()
{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                       {/* PROPERTY BINDING */}
                    <Link className="nav-link" to="home"><img src={logo} style={{height:30,width:30}}></img></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="birthday">Birthday</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="wedding">Wedding</Link>
                </li>

            </ul>
        </nav>
    )
}