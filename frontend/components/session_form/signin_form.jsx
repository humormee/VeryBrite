import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          Welcome to VeryBrite!
          <br />
          {this.renderErrors()}
          <div className="signin-form">
            <br />
            <label>
              
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input"
              ><span
                className="inner-text">Username
                </span></input>
            </label>
            <br />
            <label>
              <span 
              className="inner-text">Password
              </span>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value='Log in'/>
          </div>
        </form>


      </div>
    );
  }
}

export default SessionForm;