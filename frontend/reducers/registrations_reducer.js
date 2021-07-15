import {
  RECEIVE_ALL_REGISTRATIONS,
  RECEIVE_REGISTRATION,
  REMOVE_REGISTRATION
} from '../actions/registration_actions'


const registrations = (state = {}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {

  case RECEIVE_ALL_REGISTRATIONS:
    return Object.assign({}, nextState, action.registrations)
  case RECEIVE_REGISTRATION:
    let registration = { [action.registration.id]: action.registration};
    return Object.assign({}, nextState, registration);
  case REMOVE_REGISTRATION:
    delete nextState[action.registrationId]
    return nextState;
  default:
    return state;
}

}

export default registrations;