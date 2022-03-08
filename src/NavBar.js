import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { logout } from './services/fetch-utils';
import menuIcon from './menuIcon.png';
import closeIcon from './closeIcon.png';

export default function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [header, setHeader] = useState('');
  const location = useLocation();

  function handleToggle() {
    setNavBarOpen(!navBarOpen);
  }

  function closeMenu() {
    setNavBarOpen(false);
  }

  useEffect(() => {
    if (location.pathname.includes('popular')) {
      setHeader('Weekly Top Movies');
    }
    if (location.pathname.includes('search')) {
      setHeader('Search Page');
    }
    if (location.pathname.includes('watchlist')) {
      setHeader('Watchlist');
    }
  }, [location.pathname]);

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
      <h2 className="nav-header">{header}</h2>
    </nav>
  );
}
