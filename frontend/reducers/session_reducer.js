import {
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const session = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return { id: action.user.id };
    case SIGNOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default session;