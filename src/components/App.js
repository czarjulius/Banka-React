import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../components/Home/HomePage';

/**
 * App component, renders all the other components.
 */
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
