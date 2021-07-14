import { connect } from 'react-redux';
import { fetchEvent } from 'react-router-dom';
import { createRegistration, removeRegistration } from '../../actions/registration_actions';
// import { closeModal } from '../../actions/modal_actions'
import RegistrationModal from './registration_modal.jsx'
// import registrations from '../../reducers/registrations_reducer';
// import entities from '../../reducers/entities_reducer';

const mSTP = ( state, ownProps ) => {

  return ({
    registrations: state.entities.registrations,
    currentUser: state.enities.users.id
  })
};

const mDTP = dispatch => {
  return ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    createRegistration: registration => dispatch(createRegistration(registration)),
    removeRegistration: registrationId => dispatch(removeRegistration(registrationId))
  })
}

export default connect(mSTP, mDTP)(RegistrationModal);