import * as RegistrationApiUtil from '../util/registration_api_util';

export const RECEIVE_ALL_REGISTRATIONS = "RECEIVE_ALL_REGISTRATIONS";
export const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";
export const REMOVE_REGISTRATION = "REMOVE_REGISTRATION";
export const RECEIVE_REGISTRATION_ERRORS = "RECEIVE_REGISTRATION_ERRORS";

const receiveAllRegistrations = registrations => ({
  type: RECEIVE_ALL_REGISTRATIONS,
  registrations
})

const receiveRegistration = registration => ({
  type: RECEIVE_REGISTRATION,
  registration
});

const removeRegistration = registrationId => ({
  type: REMOVE_REGISTRATION,
  registrationId
});

const receiveRegistrationErrors = errors => ({
  type: RECEIVE_REGISTRATION_ERRORS,
  errors
});


export const fetchRegistrations = () => dispatch => (
  RegistrationApiUtil.fetchRegistrations()
      .then(registrations =>{ 
        debugger
        return (
          dispatch(receiveAllRegistrations(registrations))
          )},
      e => dispatch(receiveRegistrationErrors(e.responseJSON)))
);

export const createRegistration = registration => dispatch => (
  RegistrationApiUtil.createRegistration(registration)
      .then(registration => dispatch(receiveRegistration(registration)),
      e => dispatch(receiveRegistrationErrors(e.responseJSON)))
);

export const deleteRegistration = registrationId => dispatch => (
  RegistrationApiUtil.deleteRegistration(registrationId)
      .then(registrationId => dispatch(removeRegistration(registrationId)),
      e => dispatch(receiveRegistrationErrors(e.responseJSON)))
);