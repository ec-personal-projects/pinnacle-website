import React from 'react';
// import HeaderMenu from './HeaderMenu';
import logo from '../../assets/nav-logo.png';

const Header = () => {
  
  return (
    <div className="nav-container">
      <img src={logo} alt="Pinnacle Logo" />
      <div className="menu">
        <a href="''">ABOUT</a>
        <a href="''">SERVICES</a>
        <a href="''">PROJECTS</a>
        <a href="''">CONTACT</a>
      </div>
    </div>
  )
}

export default Header
