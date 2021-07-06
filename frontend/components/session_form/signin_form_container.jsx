import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signin',
    navLink: <Link className="nav-signup" to="/signup">Sign up for verybrite</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signin(user)),
    // clearErrors: () => disptach(clearErrors);
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);