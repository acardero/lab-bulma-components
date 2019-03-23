import React from 'react';
import CoolButton from './CoolButton';

function NavBar(props) {
  return (
    <nav className="navbar is-transparent">
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <CoolButton
            isInfo
            isRounded
            className="navbar-item"
            href="https://bulma.io/"
          >
            Login
          </CoolButton>
          <CoolButton
            isInfo
            isRounded
            className="navbar-item"
            href="https://bulma.io/"
          >
            Sign Up
          </CoolButton>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
