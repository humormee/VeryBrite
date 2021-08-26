import { connect } from 'react-redux'
import { fetchRegistrations, createRegistration, deleteRegistration } from "../../actions/registration_actions";
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import Tickets from './tickets';

const mSTP = state => {
  return ({
  registrations: state.registrations,
  events: Object.values(state.entities.events),
  user: state.session,
  // event: state.e
})
}

const mDTP = dispatch => ({
  createRegistration: reg => dispatch(createRegistration(reg)),
  deleteRegistration: regId => dispatch(deleteRegistration(regId)),
  fetchRegistrations: (eventId) => dispatch(fetchRegistrations(eventId)),
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(Tickets);