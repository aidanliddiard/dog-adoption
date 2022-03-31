import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../services/users';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogOut = async () => {
    await logOutUser();
    setCurrentUser(null);
  };
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink exact to="/new-dog">
              Add Dog
            </NavLink>
          </li>
        )}
      </ul>
      <ul>
        {!currentUser && (
          <li>
            <NavLink exact to="/sign-in">
              Sign In
            </NavLink>
          </li>
        )}
        {currentUser && (
          <>
            <li>{currentUser}</li>
            <li>
              <button onClick={handleLogOut}>Sign out</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
