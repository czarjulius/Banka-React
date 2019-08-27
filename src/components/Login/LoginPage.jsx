import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
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
      toastr.success('Login Successful');
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
  <div>
    <Navbar />
    <div className="register-container">
        
      <div className="register-form">
        <form>
            <div className="form-header">
                <h4>Login</h4>
                <p id="loginMessage">{errors && errors.message}</p>
                <p id="loginSuccess"></p>
            </div>
          <div className="input"> 
            <label htmlFor="email"> Email </label>
            <input type="email" id="email" name="email" required onChange={this.onInputChange} /> 
          </div>
          <div className="input"> 
            <label htmlFor="password" > Password </label>
            <input type="password" id="password" name="password" required onChange={this.onInputChange} />
          </div>
            <p className="sign-up"> 
                <input type="button" id="loginUser"  value="Login" className="btn" onClick={this.submitHandler} />
            </p>
        </form>
        <div className="form-footer">
          <span id="no_account">Don't have an account ?</span>
          <Link to="signup" className="redirect"> Register Now </Link>
        </div>
      </div>
    </div>
  <Footer />
  </div>
);
}
}

const mapStateToProps = state => ({
  isLoading: state.loginReducer.isLoading,
  errors: state.loginReducer.errors,
  articles: state.signupReducer,
});
const mapDispatchToProps = dispatch => ({
  newUser: data => dispatch(loginUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
