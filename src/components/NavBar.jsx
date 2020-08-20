import React from 'react';
import './navbar.css';

function NavBar(props) {
  return (
    <div>
      <div className="nav-bar">
        <div className="horz-center nav-container">
          <div className="floated logo">GameLife</div>
          <ul className="floated nav-div nav-links">
            <li className="rela-inline">Tasks</li>
            <li
              className="rela-inline"
              onClick={() => {
                props.setItem();
              }}
            >
              Items
            </li>
            <li className="rela-inline">Dungeons</li>
            <li className="rela-inline">Community</li>
            <li className="rela-inline">Shops</li>
          </ul>

          <div className="floated right nav-div">
            <img src="/images/download.png" alt="" width="50px" />
          </div>
          <ul className="floated right nav-div">
            <img src="/images/icons/goldcoin.png" alt="" width="30px" />
            {props.coin}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
