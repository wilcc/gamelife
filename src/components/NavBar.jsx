import React from 'react';
import './navbar.css'

function NavBar(props) {
  return (
    <div>
      <div className="nav-bar">
        <div className="horz-center nav-container">
          <div className="floated logo">GameLife</div>
          <ul className="floated nav-div nav-links">
            <li className="rela-inline">Shots</li>
            <li className="rela-inline">Designers</li>
            <li className="rela-inline">Teams</li>
            <li className="rela-inline">Community</li>
            <li className="rela-inline">Jobs</li>
          </ul>
          <ul className="floated nav-div">
            <li className="rela-inline menu-toggle">•••</li>
          </ul>
          <div className="floated right nav-div">
          <img src="/images/icons/goldcoin.png" alt="" width="20px" />
          {props.coin}
          </div>
          <ul className="floated right nav-div sign-div">
            <li className="rela-inline">Sign-Up</li>
            <li className="rela-inline">Sign-In</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
