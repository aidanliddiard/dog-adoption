import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/new-dog">
            Add Dog
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sign-in">
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
