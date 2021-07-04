import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signout }) => {
  const sessionLinks = () => (
    <nav className="signin-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={signout}>Log Out</button>
    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;