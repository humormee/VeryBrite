import registrations from '../reducers/registrations_reducer';
import * as RegistrationApiUtil from '../util/registration_api_util';

export const RECEIVE_ALL_REGISTRATIONS = "RECEIVE_ALL_REGISTRATIONS";
export const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";
export const DELETE_REGISTRATION = "REMOVE_REGISTRATION";
export const RECEIVE_REGISTRATION_ERRORS = "RECEIVE_REGISTRATION_ERRORS";

const receiveAllRegistrations = registrations => {
  return ({
    type: RECEIVE_ALL_REGISTRATIONS,
    registrations
  })
  
}

const receiveRegistration = registration => ({
  type: RECEIVE_REGISTRATION,
  registration
});

const removeRegistration = registrationId => {
  return ({
    type: DELETE_REGISTRATION,
    registrationId
  })
  
};

const receiveRegistrationErrors = errors => ({
  type: RECEIVE_REGISTRATION_ERRORS,
  errors
});


export const fetchRegistrations = userId => dispatch => (
  RegistrationApiUtil.fetchRegistrations(userId)
      .then((events) =>{ 
        return (
          dispatch(receiveAllRegistrations(events))
          )},
      e => dispatch(receiveRegistrationErrors(e.responseJSON)))
);

export const createRegistration = registration => dispatch => (
  RegistrationApiUtil.createRegistration(registration)
      .then(registration => dispatch(receiveRegistration(registration)),
      e => dispatch(receiveRegistrationErrors(e.responseJSON)))
);

export const deleteRegistration = registration => dispatch => {
  return (
    RegistrationApiUtil.deleteRegistration(registration)
        .then(registration => {
          return (
            dispatch(removeRegistration(registration.id))
          )
          
        },
          
    e => dispatch(receiveRegistrationErrors(e.responseJSON)))
  )
}