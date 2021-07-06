import * as APISessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

export const signup = user => dispatch => (
  APISessionUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))),
  error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

// export const login = user => dispatch => (
//   APIUtil.login(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

export const signin = user => dispatch => (
  APISessionUtil.signin(user).then(user => (dispatch(receiveCurrentUser(user))
  ),
  error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const signout = () => dispatch => (
  APISessionUtil.signout().then(() => dispatch(signoutCurrentUser()))
);

// export const clearErrors = ()