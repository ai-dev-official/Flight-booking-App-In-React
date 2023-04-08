import React from 'react';
import UKflagIcon from '../assets/us.png';
import './topmenu.css';

const TopMenu = () => {
  return (
    <div className="main__container">
      <div className="menu__container">
        <div className="menu">
          <div class="discover">
            <span>Popular</span>
          </div>
          <div class="book">
            <span>Advanced Search</span>
          </div>
          <div class="manage">
            <span>Compare</span>
          </div>
          <div class="help">
            <span>Seating</span>
          </div>
        </div>
        <div className="lang">
          <img className="ukImg" src={UKflagIcon} alt="UK Flag" />
          <span>United States - English</span>
        </div>
      </div>
    </div>
  )
}

export default TopMenu