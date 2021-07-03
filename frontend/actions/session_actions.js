import { signin, signup, signout } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  signup(user).then(user => dispatch(receiveCurrentUser(user)),
  error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const signin = user => dispatch => (
  signin(user).then(user => dispatch(receiveCurrentUser(user)),
  error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const signout = () => dispatch => (
  signout.then(user => dispatch(signoutCurrentUser()))
);