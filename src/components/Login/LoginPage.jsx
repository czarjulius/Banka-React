import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../index.scss';
import '../Login/login.scss';

const LoginPage = () => (
  <div>
    <Navbar />
    <div className="register-container">
        
      <div className="register-form">
        <form>
            <div className="form-header">
                <h4>Login</h4>
                <p id="loginMessage"></p>
                <p id="loginSuccess"></p>
                <img src="./image/spinner.gif" id="spinner" />
            </div>
          <div className="input"> 
            <label htmlFor="email"> Email </label>
            <input type="email" id="email" required /> 
            <p id="emailError" className="alert-class"></p>
          </div>
          <div className="input"> 
            <label htmlFor="password" > Password </label>
            <input type="password" id="password" required />
            <p id="passwordError" className="alert-class"></p>
          </div>
            <p className="sign-up"> 
                <input type="button" id="loginUser"  value="Login" className="btn" />
              <a href="reset_password.html" className="reset-pass">Forgot Password?</a>
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

export default LoginPage;
