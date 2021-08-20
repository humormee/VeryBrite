import { connect } from "react-redux";
import EventsIndex from "./events_index";
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import { fetchLikes } from "../../actions/like_actions"

const mSTP = state =>{
  return ({
  events: Object.values(state.entities.events),
  user: state.session
})
} 

const mDTP = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  fetchLikes: likeId => dispatch(fetchLikes(likeId))
})

export default connect(mSTP, mDTP)(EventsIndex);