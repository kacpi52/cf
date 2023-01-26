import React from "react";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className="NavBar">
      <span className="NavBar__logo">Car Fitment</span>
      <nav>
        <ul className="NavBar__links">
          <li>
            <a href="/" className="NavBar__nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="/user">User</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
