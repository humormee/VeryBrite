import {
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER
} from '../actions/session_actions';

const defaultUser = Object.freeze({
  id: null
});

const sessionReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case SIGNOUT_CURRENT_USER:
      return defaultUser;
    default:
      state;
  }
};

export default sessionReducer;