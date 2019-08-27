import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../Dashboard/DashboardPage';
import './profile.scss';

class ProfilePage extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login', {});
    }
    const user = localStorage.getItem('user');
    this.setState({ user: JSON.parse(user) })
  };

  logout(){
    localStorage.removeItem('token');
}

  render() {
    const {firstName, lastName, phoneNumber, email} = this.state.user
    return (
  <Dashboard header_title="User Dashboard">
    <div className="dasboard-body">
      <div className="profile-container">
        <div className="personal-detail-container">
          <div className="profile-image">
            <div className="profile-pic">
              <img src={require("../../assets/image//user.png")} alt="" />
            </div>
          </div>
          <div className="profile-detail">
            <table>
              <tr>
                <caption colSpan="2">Personal Details</caption>
              </tr>
              <tr>
                <th> Name:</th>
                <td>
                  <i className="fa fa-user" /> {firstName} {lastName}
                </td>
              </tr>
              <tr>
                <th>Phone Number:</th>
                <td>
                  <i className="fa fa-phone" /> {phoneNumber}
                </td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>
                  <i className="fa fa-map-marker" /> Not Available
                </td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>
                  <i className="fa fa-calendar-o" /> Not Available
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <i className="fa fa-envelope" /> {email}
                </td>
              </tr>
              <tr>
                <th>Next of kin:</th>
                <td>
                  <i className="fa fa-child" /> Not Available
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Dashboard>

);
}
}

export default ProfilePage;
