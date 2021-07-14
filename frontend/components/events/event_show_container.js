import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
// import { createRegistration, removeRegistration } from "../../actions/registration_actions";
import { createRegistration, removeRegistration } from "../../actions/registration_actions";

const mSTP = (state, ownProps) => {

  return ({
    event: state.entities.events[ownProps.match.params.id],
    user: state.session,
    registration: state.entities.registrations
  })
  
}

const mDTP = dispatch => {
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createEvent: registrationId => dispatch(createRegistration(registrationId)),
    removeRegistration: registrationId => dispatch(removeRegistration(registrationId))
  }
  
}

export default connect(mSTP, mDTP)(EventShow);