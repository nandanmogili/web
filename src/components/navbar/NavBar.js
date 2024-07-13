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

  const handleHomeClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    resetGradient();
    window.location.href = 'https://nandanmogili.github.io/web/';
  };

  return (
    <nav className="NavBarItems reset-gradient">
      <ul className="nav-menu">
        <li>
          <a
            className="nav-links"
            href="https://nandanmogili.github.io/web/"
            onClick={handleHomeClick}
          >
            Home
          </a>
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