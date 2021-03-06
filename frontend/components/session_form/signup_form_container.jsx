import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session_actions';
// import SessionForm from './session_form';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors = [] }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/signin" className="nav-login">Log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
