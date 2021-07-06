import React from 'react';
import { Link } from 'react-router-dom'
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    // this.props.errors = [];
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
      <div className="signin-form-container">
        <div className="signup-errors">
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

            
            {this.props.navLink}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;