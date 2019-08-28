import React from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import Dashboard from '../../Dashboard/DashboardPage';
import './createAccount.scss';

import { openAccount } from '../../../actions/openAccountAction';

import Loader from '../../Loader/index';

export class CreateAccountPage extends React.Component {
  state = {
    form: {
      type: '',
      address: '',
      nextOfKin: '',
    },
  }
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login', {});
    }
  };

onInputChange = ({ target: { name, value } }) => {
  this.setState(prevState => ({
    ...prevState,
    form: {
      ...prevState.form,
      [name]: value,
    },
  }));
};

submitHandler = () => {
  const { form } = this.state;
  const account = { ...form };
  const { newAccount } = this.props;

  newAccount(account).then((status) => {
    if (status === 201) {
      toastr.success('Account Created Successfully');
      this.props.history.push('/profile');
    } else {
      toastr.error('Oops something went wrong');
      return false;
    }
  });
};

  render() {

    const { errors, isLoading } = this.props;
    if (isLoading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
  <Dashboard header_title="Open New Account">
    <div className="dasboard-body">
      <div className="details-container">
        <div className="transactions">
          <form>
            <div className="form-header">
              <p id="registerMessage" >{errors && errors.message}</p>
              <p id="registerSuccess" />
            </div>
            <div className="input">
              <select name="type" type="text" className="form-control accountInput" onChange={this.onInputChange} >
                <option value="">Select type</option>
                <option value="current">Current</option>
                <option value="savings">Savings</option>
              </select>
              <input type="text" placeholder="address" name="address" className="accountInput" onChange={this.onInputChange} />
              <input type="text" placeholder="Next of kin mobile number" className="accountInput"  name="nextOfKin" onChange={this.onInputChange} />
            </div>
            <p className="sign-up">
              <input type="button" value="Create" className="btn" onClick={this.submitHandler} />
            </p>
          </form>
        </div>
      </div>
    </div>
  </Dashboard>
);
}
}

export const mapStateToProps = state => ({
  isLoading: state.accountReducer.isLoading,
  errors: state.accountReducer.errors,
  accounts: state.accountReducer,
});
export const mapDispatchToProps = dispatch => ({
  newAccount: data => dispatch(openAccount(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAccountPage);
