import { connect } from 'react-redux'
// import { fetchRegistrations } from "../../actions/registration_actions";
import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions"
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import Likes from './likes';

const mSTP = state => {
  return ({
  likes: Object.values(state.entities.likes),
  events: Object.values(state.entities.events),
  user: state.session
})
}

const mDTP = dispatch => ({
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  createLike: like => dispatch(createLike(like)),
  fetchLikes: (eventId) => dispatch(fetchLikes(eventId)),
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
})

export default connect(mSTP, mDTP)(Likes);