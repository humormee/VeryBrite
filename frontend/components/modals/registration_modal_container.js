import { connect } from 'react-redux';
import React from 'react';
import { fetchEvent } from 'react-router-dom';
import { createRegistration, removeRegistration } from '../../actions/registration_actions';
// import { closeModal } from '../../actions/modal_actions'
import RegistrationModal from './registration_modal.jsx'

const mSTP = ( state, ownProps ) => {
  
};

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(RegistrationModal);