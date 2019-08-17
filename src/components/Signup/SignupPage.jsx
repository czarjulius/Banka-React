import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../index.scss';
import '../Signup/signup.scss';

const SignupPage = () => (
  <div>
    <Navbar />
    <div className="register-container">
        
        <div className="register-form">
          <form>
              <div className="form-header">
                  <h4>Register </h4>
                  <p id="registerMessage"></p>
                  <p id="registerSuccess"></p>
                  <img src="./image/spinner.gif" id="spinner" />
              </div>
            <div className="input"> 
              <label for="firstname"> First name </label>
              <input type="text" id="firstname" required /> 
              <p id="firstnameError" className="alert-class"></p>
            </div>
            <div className="input"> 
              <label for="lastname"> Last name </label>
              <input type="text" id="lastname" required /> 
              <p id="lastnameError" className="alert-class"></p>
            </div>
            <div className="input"> 
              <label for="email"> Email </label>
              <input type="email" id="email" required /> 
              <p id="emailError" className="alert-class"></p>
            </div>
            <div className="input"> 
                <label for="phone"> Mobile No. </label>
                <input type="text" id="phone" required /> 
                <p id="phoneError" className="alert-class"></p>
              </div>
            <div className="input"> 
              <label for="password" > Password </label>
              <input type="password" id="password" required />
              <p id="passwordError" className="alert-class"></p>
            </div>
            <div className="input"> 
              <label for="confirmpassword" >Confirm Password </label>
              <input type="password" id="confirmpassword" required />
              <p id="confirmpassword-alert" className="alert-class"></p>
            </div>
              <p className="sign-up"> 
                    <input type="button" id="registerUser" value="Register" className="btn" />            
                </p>
          </form>
          <div className="form-footer">
            <span id="no_account">Already have an account ?</span>
            <a href="login.html"> Login </a>
          </div>
        </div>
      </div>
  <Footer />
  </div>
);

export default SignupPage;