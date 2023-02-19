import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
const NavBar = () => {
  return (
    <div className="NavBar">
      <span className="NavBar__logo">Car Fitment</span>
      <nav>
        <ul className="NavBar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
