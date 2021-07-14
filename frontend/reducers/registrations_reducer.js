import {
  RECEIVE_REGISTRATION,
  REMOVE_REGISTRATION
} from '../actions/registration_actions'
// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const registrations = (state = {}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {
  case RECEIVE_REGISTRATION:
    debugger;
    let registration = { [action.registration.id]: action.registration};
    return Object.assign({}, state, registration);
  case REMOVE_REGISTRATION:
    debugger
    delete nextState[action.registrationId]
    return nextState;
  default:
    debugger
    return state;
}

}

export default registrations;