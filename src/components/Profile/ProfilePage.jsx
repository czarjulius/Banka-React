import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../Dashboard/DashboardPage';
import './profile.scss';

const Profilepage = () => (
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
                <caption colspan="2">Personal Details</caption>
              </tr>
              <tr>
                <th> Name:</th>
                <td>
                  <i className="fa fa-user" /> Julius Ngwu
                </td>
              </tr>
              <tr>
                <th>Phone Number:</th>
                <td>
                  <i className="fa fa-phone" /> 08058922347
                </td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>
                  <i className="fa fa-map-marker" /> No.2B Babalola Garden
                  off-freedomway ikate Lekki
                </td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>
                  <i className="fa fa-calendar-o" /> 03-03-2003
                </td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>
                  <i className="fa fa-envelope" /> juliusczar.jc@gmail.com
                </td>
              </tr>
              <tr>
                <th>Next of kin:</th>
                <td>
                  <i className="fa fa-child" /> Micheal Ngwu
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="account-detail-container">
          <table>
            <tr>
              <caption colspan="2">Account Details</caption>
            </tr>
            <tr>
              <th>Acc. Number:</th>
              <td>
                <i className="fa fa-none" />3056432121
              </td>
            </tr>
            <tr>
              <th> Type:</th>
              <td>
                <i className="fa fa-none" />Savings
              </td>
            </tr>
            <tr>
              <th>Status:</th>
              <td>
                <i className="fa fa-check" /> Active
              </td>
            </tr>
            <tr>
              <th>Date Created:</th>
              <td>
                <i className="fa fa-calendar-o" /> 03-03-2013
              </td>
            </tr>
            <tr>
              <th>Balance:</th>
              <td>
                <i className="fa fa-money" /> 105,000
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </Dashboard>
);

export default Profilepage;
