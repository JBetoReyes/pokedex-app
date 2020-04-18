import React from 'react';
import pokemonLogo from 'Assets/pokemon-logo.png';
import profile from 'Assets/profile.png';
import 'Assets/styles/layouts/_header.scss';

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={pokemonLogo} alt="logo" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={profile} alt="user profile" />
          <p>Profile</p>
        </div>
        <ul>
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
