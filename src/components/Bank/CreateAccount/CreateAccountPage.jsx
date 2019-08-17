import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../../Dashboard/DashboardPage';
import './createAccount.scss';

const CreateAccountPage = () => (
  <Dashboard header_title="Open New Account">
    <div className="dasboard-body">
      <div className="details-container">
        <div className="transactions">
          <form>
            <div className="form-header">
              <p id="registerMessage" />
              <p id="registerSuccess" />
            </div>
            <div className="input">
              <select name="" type="text" className="form-control">
                <option value="">Select type</option>
                <option value="">Current</option>
                <br />
                <option value="">Savings</option>
                <br />
              </select>
              <input type="text" placeholder="address" />
              <input type="text" placeholder="Next of kin mobile number" />
            </div>
            <p className="sign-up">
              <input type="button" value="Create" className="btn" />
            </p>
          </form>
        </div>
      </div>
    </div>
  </Dashboard>
);

export default CreateAccountPage;
