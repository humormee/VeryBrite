import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
import { createRegistration, deleteRegistration } from "../../actions/registration_actions";
import { fetchRegistrations } from "../../actions/registration_actions";


const mSTP = (state, ownProps) => {

  return ({
    event: state.entities.events[ownProps.match.params.id],
    user: state.session,
    registrations: state.registrations
  })

  
}

const mDTP = dispatch => {
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    fetchRegistrations: () => dispatch(fetchRegistrations()),
    createRegistration: registration => dispatch(createRegistration(registration)),
    deleteRegistration: registrationId => dispatch(deleteRegistration(registrationId))
  }
  
}

export default connect(mSTP, mDTP)(EventShow);