import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Header.css';

const Header = () => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink exact to="/" className="navbar-brand" activeClassName="active">
              오동통통
            </NavLink>
          </div>
        </div>
      </nav>
    );
};

export default Header;
