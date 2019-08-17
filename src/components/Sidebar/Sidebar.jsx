import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Sidebar extends Component {

  render() {
    return (
        <div className="s-layout__sidebar">
        <a className="s-sidebar__trigger" href="#0">
            <i className="fa fa-bars"></i>
        </a>
        
        <nav className="s-sidebar__nav">
            <ul>
              <li>
                <NavLink  to="/profile">
                      <img className="profile-img" src={require("../../assets/image/user.png")} alt="" />
                    <p className="profile-name">Julius Ngwu</p> 
                </NavLink>
              </li>
              <li>
                <NavLink className="s-sidebar__nav-link active" to="/profile">
                  <i className="fa fa-table"></i><em>Account Details</em>
                </NavLink>
              </li>
              <li>
                <NavLink className="s-sidebar__nav-link" to="create">
                  <i className="fa fa-folder-open-o"></i><em>Create Account</em>
                </NavLink>
              </li>
              
              <li>
                  <NavLink className="s-sidebar__nav-link" to="./login">
                    <i className="fa fa-sign-out"></i><em>Log out</em>
                  </NavLink>
              </li>
            </ul>
        </nav>
    </div>
    );
  }
}

export default Sidebar;
