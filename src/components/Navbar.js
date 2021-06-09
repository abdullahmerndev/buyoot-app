import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <Link to="/"><span class="material-icons">home</span></Link>
        </li>
        <li className="navbar-list__item">
          <Link to="./about"><span class="material-icons">info</span></Link>
        </li>
        <li className="navbar-list__item">
          <Link to="./contact"><span class="material-icons">contact_mail</span></Link>
        </li>
        <li className="navbar-list__item">
          <Link to="./testimonials"><span class="material-icons">insights</span></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
