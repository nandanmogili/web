import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const resetGradient = () => {
    const elements = document.querySelectorAll('.reset-gradient');
    elements.forEach(el => {
      el.classList.remove('reset-gradient');
      void el.offsetWidth; // Trigger reflow
      el.classList.add('reset-gradient');
    });
  };

  return (
    <nav className="NavBarItems reset-gradient">
      <ul className="nav-menu">
        <li>
          <NavLink className="nav-links" to="/web" exact onClick={resetGradient}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/resume">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
