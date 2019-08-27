import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../index.scss';
import '../Signup/signup.scss';
import { registerUser } from '../../actions/signupAction';
import Loader from '../Loader/index';

export class SignupPage extends React.Component {
  state = {
    form: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
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
    if (status === 201) {
      this.props.history.push('/login');
      
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
                  <h4>Register </h4>
                  <p id="registerMessage">{errors && errors.message}</p>
                  <p id="registerSuccess"></p>
                  <img src="./image/spinner.gif" id="spinner" />
              </div>
            <div className="input"> 
            {errors && errors.firstName && ( <span className="red"> {errors.firstName} </span>)}
              <label htmlFor="firstname"> First name </label>
              <input type="text" id="firstname" name="firstName" required onChange={this.onInputChange} /> 
              <p id="firstnameError" className="alert-class"></p>
            </div>
            <div className="input"> 
            {errors && errors.lastname && ( <span className="red"> {errors.lastname} </span>)}
              <label htmlFor="lastname"> Last name </label>
              <input type="text" id="lastname" name="lastName" required onChange={this.onInputChange} /> 
              <p id="lastnameError" className="alert-class"></p>
            </div>
            <div className="input"> 
            {errors && errors.email && ( <span className="red"> {errors.email} </span>)}
              <label htmlFor="email"> Email </label>
              <input type="email" id="email" name="email" required onChange={this.onInputChange} /> 
              <p id="emailError" className="alert-class"></p>
            </div>
            <div className="input"> 
            {errors && errors.phoneNumber && ( <span className="red"> {errors.phoneNumber} </span>)}
                <label htmlFor="phone"> Mobile No. </label>
                <input type="text" id="phone" name="phoneNumber" required onChange={this.onInputChange} /> 
                <p id="phoneError" className="alert-class"></p>
              </div>
            <div className="input"> 
            {errors && errors.password && ( <span className="red"> {errors.password} </span>)}
              <label htmlFor="password" > Password </label>
              <input type="password" id="password" name="password" required onChange={this.onInputChange} />
              <p id="passwordError" className="alert-class"></p>
            </div>
              <p className="sign-up"> 
                    <input type="button" id="registerUser" value="Register" className="btn" onClick={this.submitHandler}/>            
                </p>
          </form>
          <div className="form-footer">
            <span id="no_account">Already have an account ?</span>
            <Link to="/login" className="redirect"> Login </Link>
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
  newUser: data => dispatch(registerUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupPage);
