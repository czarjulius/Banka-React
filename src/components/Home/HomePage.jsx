import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../Home/home.scss';
import '../../index.scss';

const Homepage = () => (
  <div>
    <Navbar />
    <div className="head-container">
      <div className="descriptions">
      <h3>
          Banka is a light-weight core banking application that powers banking operations 
          like account creation, customer deposit and withdrawals.
        </h3>  
        <a href="./login.html">
          <input type="button" value="Get started" className="btn getStarted" />
        </a>
      </div>
    </div>
    <div className="services">
    <div className="service-container">
      <div className="box">
        <img src="https://d3c2plo0qyv3hc.cloudfront.net/images/landing/feature-icon__reminder.png" alt="" />
        <h3>Just skip the queue</h3>
        <p>Create and view all your account details without leaving the house</p>
      </div>
      <div className="box">
        <img src="https://d3c2plo0qyv3hc.cloudfront.net/images/landing/feature-icon__mobile.png" alt="" />
        <h3>Bank From Any Device</h3>
        <p>Very responsive. So you can access your bank details from any device</p>
      </div>
      <div className="box">
        <img src="https://d3c2plo0qyv3hc.cloudfront.net/images/landing/feature-icon__security2.png" alt="" />
        <h3>Security</h3>
        <p>You can be rest assured that your details are totaly safe and secured </p>
      </div>
    </div>

  </div>
  <Footer />
  </div>
);

export default Homepage;