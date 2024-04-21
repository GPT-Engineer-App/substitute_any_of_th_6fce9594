import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">GPT Awards</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/review">Review</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/compare">Compare</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forum">Forum</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;