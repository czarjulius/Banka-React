import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './dashboard.scss';
import Sidebar from '../Sidebar/Sidebar';

const DashboardPage = (props) => (
  <div>
    <Sidebar />
    <div className="content">
      <div className="dashboard-header">
        <h2>{props.header_title}</h2>
      </div>
      { props.children }
    </div>
    <Footer />
  </div>
);

export default DashboardPage;
