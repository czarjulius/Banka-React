import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import Homepage from '../components/Home/HomePage';
import LoginPage from '../components/Login/LoginPage';
import SignupPage from '../components/Signup/SignupPage';
import ProfilePage from '../components/Profile/ProfilePage';
import CreateAccountPage from '../components/Bank/CreateAccount/CreateAccountPage';

/**
 * App component, renders all the other components.
 */
const App = () => (
  <React.Fragment>
  <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar
    closeOnToastrClick
  />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/create" component={CreateAccountPage} />
    </Switch>
  </React.Fragment>
);

export default App;
