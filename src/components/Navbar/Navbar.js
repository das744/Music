import React, {useState} from 'react'

import { NavLink } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (

    <nav className="navbar">
      <div className="nav_container">
        <div className="logo">
        Logo
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <i class="fas fa-bars"></i>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services"> Services</NavLink>
            </li>
            <li>
              <NavLink to="/feature">Feature</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}