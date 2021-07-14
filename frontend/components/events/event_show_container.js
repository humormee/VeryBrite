import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
import { createRegistration, removeRegistration } from "../../actions/registration_actions";
import session from "../../reducers/session_reducer";

const mSTP = (state, ownProps) => {
  // events: Object.values(state.entities.events),
  // debugger
  return {
    event: state.entities.events[ownProps.match.params.id],
    user: state.session
    // currentUser: state.currentUser
  }
  
  // currentUser: state.session
}

const mDTP = dispatch => {
  // debugger
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createEvent: registrationId => dispatch(createRegistration(registrationId)),
    removeRegistration: registrationId => dispatch(removeRegistration(registrationId))
  }
  
}

export default connect(mSTP, mDTP)(EventShow);