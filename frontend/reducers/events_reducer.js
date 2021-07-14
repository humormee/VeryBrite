import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from '../actions/event_actions';

import {
  RECEIVE_REGISTRATION,
  REMOVE_REGISTRATION
} from '../actions/registration_actions';
import { updateEvent } from '../util/event_api_util';

const events = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    
    case RECEIVE_REGISTRATION:
      debugger
      updateEvent = state[action.registration.event_id];
      updateEvent.attendees.push(action.registration.attendee_id);
      return Object.assign(nextState, { [updateEvent.id]: updateEvent });
    // case REMOVE_REGISTRATION:
    //   updateEvent = state[action.registration.attendee_id];
    //   removeAttendee = updateEvent.attendees.filter(attendee => attendee.id !== action.)

    case RECEIVE_ALL_EVENTS:
      debugger
      return Object.assign({}, nextState, action.events);
    case RECEIVE_EVENT:
      debugger
      return Object.assign({}, nextState, { [action.event.id] : action.event});
    case REMOVE_EVENT:
      delete nextState[action.eventId]
      return nextState;
    default:
      return state;
  }
}

export default events;