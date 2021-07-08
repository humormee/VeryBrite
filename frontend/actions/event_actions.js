import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_ALL_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const REMOVE_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = eventId => ({
  type: REMOVE_EVENT,
  eventId
})

export const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
})

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
})

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents().then(events => dispatch(receiveAllEvents(events)),
  errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const fetchEvent = eventId => dispatch => (
  EventApiUtil.fetchEvent(eventId).then(event => dispatch(receiveEvent(event)),
  errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const createEvent = event => dispatch => (
  EventApiUtil.createEvent(event).then(event => dispatch(receiveEvent(event)),
  errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event).then(event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveEventErrors(errors.responseJSON)))
)

export const deleteEvent = eventId => dispatch => (
  EventApiUtil.deleteEvent(eventId).then(() => dispatch(removeEvent(eventId)),
    errors => dispatch(receiveEventErrors(errors.responseJSON)))
)