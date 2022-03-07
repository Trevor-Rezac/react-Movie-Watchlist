import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from './services/fetch-utils';
import menuIcon from './menuIcon.png';
import closeIcon from './closeIcon.png';

export default function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  function handleToggle() {
    setNavBarOpen(!navBarOpen);
  }

  function closeMenu() {
    setNavBarOpen(false);
  }

  return (
    <nav className="navBar">
      <button className="menu-btn" onClick={handleToggle}>
        {navBarOpen ? (
          <img className="menu-icon" src={closeIcon} />
        ) : (
          <img className="close-icon" src={menuIcon} />
        )}
      </button>
      <ul className={`menuNav ${navBarOpen ? ' showMenu' : ''}`}>
        <NavLink activeClassName="active-nav" to="/popular-movies" onClick={closeMenu}>
          Popular Movies
        </NavLink>
        <NavLink activeClassName="active-nav" to="/search-page" onClick={closeMenu}>
          Search Page
        </NavLink>
        <NavLink activeClassName="active-nav" to="/watchlist" onClick={closeMenu}>
          Watchlist
        </NavLink>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </ul>
    </nav>
  );
}
