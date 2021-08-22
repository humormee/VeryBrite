import { connect } from "react-redux";
import EventsIndex from "./events_index";
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import { fetchLikes, deleteLike, createLike } from "../../actions/like_actions"

const mSTP = state =>{
  return ({
  events: Object.values(state.entities.events),
  user: state.session,
  likes: Object.values(state.entities.likes)
})
} 

const mDTP = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  fetchLikes: likeId => dispatch(fetchLikes(likeId)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  fetchLikes: userId => dispatch(fetchLikes(userId))
})

export default connect(mSTP, mDTP)(EventsIndex);