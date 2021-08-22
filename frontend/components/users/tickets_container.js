import { connect } from 'react-redux'
import { fetchRegistrations } from "../../actions/registration_actions";
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import Tickets from './tickets';

const mSTP = state => {
  return ({
  registrations: state.registrations,
  events: Object.values(state.entities.events),
  user: state.session.id
})
}

const mDTP = dispatch => ({
  fetchRegistrations: (eventId) => dispatch(fetchRegistrations(eventId)),
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(Tickets);