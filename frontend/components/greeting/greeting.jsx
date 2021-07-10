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
          <div className="header-button-container">
            <Link to="/signin"className="header-button">Sign In</Link>
          </div>
        
      </hgroup>
      
    );
  }

  const personalGreeting = () => {
    debugger
    return (
      <hgroup className="header-group">
        <Link to="/" className="nav-verybrite">verybrite</Link>        
        <h2 className="header-name">Welcome, {currentUser.username}!</h2>
        <div className="nav-dropdown">
          <button className="nav-email">{currentUser.email}</button>
          <div className="dropdown-content">
            <button className="header-button" onClick={signout}>Sign Out</button>
          </div>
        </div>
          
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