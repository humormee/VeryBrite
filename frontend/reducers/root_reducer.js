import { combineReducers } from "redux";
import entities from './entities_reducer'
import session from "./session_reducer";
import errors from "./errors_reducer";
import eventErrors from "./event_errors_reducer";
import events from "./events_reducer";
import registrations from "./registrations_reducer";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  events,
  registrations
});

export default rootReducer;