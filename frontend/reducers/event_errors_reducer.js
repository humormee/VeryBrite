import {
  RECEIVE_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS
} from '../actions/event_actions';

const eventErrors = (state = [], action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_EVENT_ERRORS:
      return [];
    default:
      return state;
  }
}

export default eventErrors;