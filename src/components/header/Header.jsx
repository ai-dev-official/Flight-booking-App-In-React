import React from 'react';
import './header.css';
import air from '../assets/air.png';
import one from '../assets/one.png';
import SearchIcon from '../assets/search.svg';
import UserIcon from '../assets/user.svg'


const Header = () => {
  return (
      <div className="headerContainer">
          <div className="logo">
            <img className="logoImg" src={air} alt="logo"/>
            <img className="oneImg" src={one} alt="one world logo" />
          </div>
          <div className="header__right">
              <img id='header__search' src={SearchIcon} alt="search" />
              <img id='header__user' src={UserIcon} alt="user" />
              <span id='header__login'>LOG IN</span>
          </div>
      </div>
  )
}

export default Header;