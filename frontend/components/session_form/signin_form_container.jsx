import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors = [] }) => {
  
  return {
    errors: errors.session,
    formType: 'signin',
    navLink: <Link className="nav-signup" to="/signup">Sign up for verybrite</Link>,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    processForm: user => dispatch(signin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);