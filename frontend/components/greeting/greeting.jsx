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
    return (
      <hgroup className="header-group">
        <Link to="/" className="nav-verybrite">verybrite</Link>        
        {/* <h2 className="header-name">Welcome, {currentUser.username}!</h2> */}
        <div className="right-nav-bar">
          <div className="create-container">
            <Link className="create" to="/events/create">Create</Link>  
          </div>

          <div className="tickets-container">
            <Link className="tickets" to={`../../users/${currentUser.id}/registrations`}>Tickets</Link>
          </div>

          <div className="likes-container">
            <Link className="likes" to={`../../users/${currentUser.id}/likes`}>Bookmarks</Link>
          </div>
          
          <div className="nav-dropdown">
            <button className="nav-email">{currentUser.email}</button>
            <div className="dropdown-content">
              <button className="header-button" onClick={signout}>Sign Out</button>
              <Link to={`../../users/${currentUser.id}/registrations`}>
              <button className="header-button">Bookmarks</button>
              </Link>

              <Link to={`../../users/${currentUser.id}/likes`}>
                <button className="header-button">My Likes</button>
              </Link>
              
            </div>
          </div>
        </div>
        </hgroup> 
      )
  }

  return currentUser ? personalGreeting() : greeting();
}
  // return personalGreeting();

  // currentUser ? 
  export default Greeting;