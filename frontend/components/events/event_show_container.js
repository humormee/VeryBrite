import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
import { createRegistration, deleteRegistration } from "../../actions/registration_actions";
import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions";
import { fetchRegistrations } from "../../actions/registration_actions";


const mSTP = (state, ownProps) => {

  return ({
    event: state.entities.events[ownProps.match.params.id],
    user: state.session,
    registrations: state.registrations,
    likes: state.entities.likes
  })

  
}

const mDTP = dispatch => {
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    fetchRegistrations: (eventId) => dispatch(fetchRegistrations(eventId)),
    createRegistration: registration => dispatch(createRegistration(registration)),
    deleteRegistration: registrationId => dispatch(deleteRegistration(registrationId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: userId => dispatch(fetchLikes(userId))
  }
  
}

export default connect(mSTP, mDTP)(EventShow);