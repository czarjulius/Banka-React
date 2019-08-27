import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

  render() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo"><b>B</b>anka</NavLink>
            <ul className="main-nav" id="js-menu">
              <li>
                  <NavLink to="./signup" className="nav-links">Sign Up</NavLink>
              </li>
              <li>
                  <NavLink to="./login" className="nav-links">Login</NavLink>
              </li>
            </ul>
        </nav>
    );
  }
}

export default NavBar;
