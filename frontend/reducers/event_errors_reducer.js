import {
  RECEIVE_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS
} from '../actions/event_actions';

const eventErrors = (state = [], action) => {
  Object.freeze(state);
  // let nextState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      // debugger
      return action.errors;
    case CLEAR_EVENT_ERRORS:
      // debugger
      return [];
    default:
      // debugger
      return state;
  }
}
// debugger

export default eventErrors;