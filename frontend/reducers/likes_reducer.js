import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  DELETE_LIKE
} from '../actions/like_actions'


const likes = (state = {}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {

  case RECEIVE_ALL_LIKES:
    // let eventlikes = Object.values(action.likes).filter(like => like.event_id === 2);
    return Object.assign({}, nextState, action.likes)
  case RECEIVE_LIKE:
    let like = { [action.like.id]: action.like};
    return Object.assign({}, nextState, like);
  case DELETE_LIKE:
    delete nextState[action.likeId]
    return nextState;
  default:
    return state;
}

}

export default likes;