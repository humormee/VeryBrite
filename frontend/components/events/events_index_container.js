import { connect } from "react-redux";
import EventsIndex from "./events_index";
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import { registerEvent } from "../../actions/registration_actions"


const mSTP = state =>{
  return ({
  events: Object.values(state.entities.events),
  user: state.session
})
} 

const mDTP = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: eventId => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(EventsIndex)