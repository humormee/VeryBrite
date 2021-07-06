import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount(){
    // this.props.errors = [];
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
      <div className="signup-form-container">
        <div className="signup-errors">
          {this.renderErrors()}
        </div>
        
        <form onSubmit={this.handleSubmit}
          className="signup-form-box">
          <br />
          <div className="signup-form"
          >
            <div>
              <Link to="/"
                className="header-link">
                <h1>verybrite</h1>
              </Link>
              <h1 className="header-create-account">Create an account</h1>
            </div>
            
            <br />
            <label>
              <input placeholder="First Name" type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input type="text"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value='signup' />
          </div>
            {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default SignupForm;