import React from 'react';
import pokemonLogo from '../../../../public/assets/pokemon-logo.png';
import '../../../../public/assets/styles/layouts/_header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={pokemonLogo} alt="logo" />
    </header>
  );
};

export default Header;
