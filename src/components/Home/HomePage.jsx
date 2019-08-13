import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div>
    <h1>Welcome Banka</h1>
    <h3>Good to see you</h3>
    <ul>
      <li>
        <Link to="/error">CLICK HERE TO SEE SOME ERRORS</Link>
      </li>
      <br />
      <br />
      <li>
        <Link to="/login">CLICK HERE TO SEE THE LOGIN PAGE</Link>
      </li>
    </ul>
  </div>
);

export default Homepage;