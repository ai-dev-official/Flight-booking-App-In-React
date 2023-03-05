import React from 'react';
import UKflagIcon from '../assets/uk.png';
import './topmenu.css';

const TopMenu = () => {
  return (
    <div className="main__container">
      <div className="menu__container">
        <div className="menu">
          <div class="discover">
            <span>Discover</span>
          </div>
          <div class="book">
            <span>Book</span>
          </div>
          <div class="manage">
            <span>Manage</span>
          </div>
          <div class="help">
            <span>Help</span>
          </div>
        </div>
        <div className="lang">
          <img className="ukImg" src={UKflagIcon} alt="UK Flag" />
          <span>United Kingdom - English</span>
        </div>
      </div>
    </div>
  )
}

export default TopMenu