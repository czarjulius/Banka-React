import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  state = {
    user: {
      firstName: '',
      lastName: ''
    },
  }

  componentDidMount = () => {
    const user = localStorage.getItem('user');
    this.setState({ user: JSON.parse(user) })
  };

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

  render() {
    const { firstName, lastName} = this.state.user
    return (
        <div className="s-layout__sidebar">
        <a className="s-sidebar__trigger" href="#0">
            <i className="fa fa-bars"></i>
        </a>
        
        <nav className="s-sidebar__nav">
            <ul>
              <li>
                <NavLink  to="/profile" className="userprofile">
                      <img className="profile-img" src={require('../../assets/image/user.png')} alt="" />
                    <p className="profile-name">{firstName} {lastName}</p> 
                </NavLink>
              </li>
          
              <li>
                <NavLink className="s-sidebar__nav-link" to="profile">
                  <i className="fa fa-folder-open-o"></i><em>View Profile</em>
                </NavLink>
              </li>
              <li>
                <NavLink className="s-sidebar__nav-link" to="create">
                  <i className="fa fa-folder-open-o"></i><em>Create Account</em>
                </NavLink>
              </li>
              
              <li onClick={this.logout}>

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
