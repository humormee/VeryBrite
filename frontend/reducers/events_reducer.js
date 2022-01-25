import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from '../actions/event_actions';


const events = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return Object.assign({}, nextState, action.events);
    case RECEIVE_EVENT:
      return Object.assign({}, nextState, { [action.event.id] : action.event});
    case REMOVE_EVENT:
      delete nextState[action.eventId.id]
      return nextState;
    default:
      return state;
  }
}

export default events;