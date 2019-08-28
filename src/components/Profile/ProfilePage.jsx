import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Dashboard from '../Dashboard/DashboardPage';
import './profile.scss';
import { fetchUserAccounts } from '../../actions/fetchUserAccountsAction';

export class ProfilePage extends Component {
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
      return;
    }
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user })
    const { email } = user;

    const { fetchAccounts } = this.props;
    fetchAccounts(email);
  };

  logout(){
    localStorage.removeItem('token');
}

renderAccount(account) {
  return (
    <div className="account-detail-container" key={account.accountnumber}>
    <table>
        <caption colSpan="2">{account.accountnumber} Details</caption>
     <tbody>
      <tr>
        <th>Acc. Number:</th>
        <td><i className="fa fa-none"></i>{account.accountnumber}</td>
      </tr>
      <tr>
        <th> Type:</th>
        <td><i className="fa fa-none"></i>{account.type}</td>
      </tr>
      <tr>
        <th>Status:</th>
        <td><i className="fa fa-check"></i> {account.status} </td>
      </tr>
      <tr>
        <th>Date Created:</th>
        <td><i className="fa fa-calendar-o"></i> {account.createdon}</td>
      </tr>
      <tr>
        <th>Balance:</th>
        <td><i className="fa fa-money"></i> {account.balance}</td>
      </tr>
      </tbody>

    </table>
  </div>
  )
}

  render() {
    const { user: { firstName, lastName, phoneNumber, email } } = this.state
    const { userAccounts: { isLoading, accounts } } = this.props;
    return (
  <Dashboard header_title="User Dashboard">
    <div className="dasboard-body">
      <div className="profile-container">
        <div className="personal-detail-container">
          <div className="profile-image">
            <div className="profile-pic">
              <img src={require('../../assets/image//user.png')} alt="" />
            </div>
          </div>
          <div className="profile-detail">
            <table>
                <caption colSpan="2">Personal Details</caption>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
        
        {accounts.map(account => this.renderAccount(account))}
      </div>
     
    </div>
  </Dashboard>

);
}
}

const mapStateToProps = state => ({
  errors: state.accountReducer.errors,
  userAccounts: state.fetchAccountsReducer,
});

export const mapDispatchToProps = dispatch => ({
  fetchAccounts: (email) => dispatch(fetchUserAccounts(email)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);