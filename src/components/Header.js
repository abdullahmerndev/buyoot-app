import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/"><h1 className="App-header__title">buyoot</h1></Link>
    </header>
  );
}

export default Header;
