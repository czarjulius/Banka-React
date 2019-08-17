import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/Home/HomePage';
import LoginPage from '../components/Login/LoginPage';

/**
 * App component, renders all the other components.
 */
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </div>
);

export default App;
