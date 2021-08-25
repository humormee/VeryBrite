import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount(){
    // this.unsubscribe();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    // this.setState({
    //   username: 'demo',
    //   password: 'password'
    // });
    // const user = Object.assign({
    //   'username': 'demo', 
    //   'password': 'password'}, 
    //   this.state)

    this.props.processForm({
      username: 'demo',
      password: 'password'
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup">
      <div className="split-left-container">
        <div className="split-left">
        <div className="signup-form-container">
        <div className="signin-signup-errors">
          {this.renderErrors()}
        </div>
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <br />
          <div className="signin-form">
            <Link to="/"
              className="header-link">
              <h1>verybrite</h1>
            </Link>
            <br />
            <h1 className="login-header">Log in</h1>
            <br />
            <label>
              <input type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input"
              />
            </label>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value='Log in' />

            <button className="demo-submit" type="submit" value='Demo' onClick={this.handleDemo}>Demo</button>
            
            {this.props.navLink}
          </div>
        </form>
        </div>
        </div>
        </div>
        <div className="split-right-container">
          <div className="split-right">
          </div>
        </div>
        </div>
        
    );
  }
}

export default SessionForm;