import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../index.scss';
import '../Login/login.scss';

import { loginUser } from '../../actions/loginAction';
import Loader from '../Loader/index';

export class LoginPage extends React.Component {
  state = {
    form: {
      email: '',
      password: '',
    },
  }

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
  const user = { ...form };
  const { newUser } = this.props;

  newUser(user).then((status) => {
    if (status === 200) {
      this.props.history.push('/create');
    } else {
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
  <div>
    <Navbar />
    <div className="register-container">
        
      <div className="register-form">
        <form>
            <div className="form-header">
                <h4>Login</h4>
                <p id="loginMessage"></p>
                <p id="loginSuccess"></p>
            </div>
          <div className="input"> 
            <label htmlFor="email"> Email </label>
            <input type="email" id="email" name="email" required onChange={this.onInputChange} /> 
            <p id="emailError" className="alert-class"></p>
          </div>
          <div className="input"> 
            <label htmlFor="password" > Password </label>
            <input type="password" id="password" name="password" required onChange={this.onInputChange} />
            <p id="passwordError" className="alert-class"></p>
          </div>
            <p className="sign-up"> 
                <input type="button" id="loginUser"  value="Login" className="btn" onClick={this.submitHandler} />
            </p>
        </form>
        <div className="form-footer">
          <span id="no_account">Don't have an account ?</span>
          <a href="signup.html"> Register Now </a>
        </div>
      </div>
    </div>
  <Footer />
  </div>
);
}
}

const mapStateToProps = state => ({
  isLoading: state.signupReducer.isLoading,
  errors: state.signupReducer.errors,
  articles: state.signupReducer,
});
const mapDispatchToProps = dispatch => ({
  newUser: data => dispatch(loginUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
