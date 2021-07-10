import React from 'react';
import { Link } from 'react-router-dom';

  // const sessionLinks = () => (
  //   <nav className="signin-signup">
  //     <Link className="signin-signup-buttons"to="/signin">Log in</Link>
  //     <Link 
  //     className="signin-signup-buttons"
  //     to="/signup">Sign up!</Link>
  //   </nav>

const Greeting = ({ currentUser, signout, signin }) => {
  const greeting = () => {
    debugger;
    return (
    <hgroup className="header-group">
          <Link to="/" className="nav-verybrite">verybrite</Link>
          {/* <h2 className="nav-verybrite">verybrite
          </h2> */}
        <Link to="/signin"className="header-button">Sign out</Link>
      </hgroup>
      
    );
  }

  const personalGreeting = () => {
    debugger
    return (
      <hgroup className="header-group">
        <Link to="/" className="nav-verybrite">verybrite</Link>        
        <h2 className="header-name">Welcome, {currentUser.username}!</h2>
          <button className="header-button" onClick={signout}>{currentUser.email}</button>
        </hgroup> 
      )
  }

  // const personalGreeting = () => (
  //   <hgroup className="header-group">
  //     <h2 className="nav-verybrite">verybrite</h2>
  //     <h2 className="header-name">Welcome, {currentUser.username}!</h2>
  //     <button className="header-button" onClick={signout}>Sign Out</button>
  //   </hgroup>
  // )

  return currentUser ? personalGreeting() : greeting();
}
  // return personalGreeting();

  // currentUser ? 
  export default Greeting;