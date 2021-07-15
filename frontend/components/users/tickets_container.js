import { connect } from 'react-redux'
import { fetchRegistrations } from "../../actions/registration_actions";
import { fetchEvents } from "../../actions/event_actions";
import Tickets from './tickets';

const mSTP = state => {
  // debugger
  return ({
  registrations: state.registrations,
  events: Object.values(state.entities.events)
})
}

const mDTP = dispatch => ({
  fetchRegistrations: (eventId) => dispatch(fetchRegistrations(eventId)),
  fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mSTP, mDTP)(Tickets);