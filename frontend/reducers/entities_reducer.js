import { combineReducers } from "redux";
import users from "./users_reducer";
import events from "./events_reducer";
import registrations from "./registrations_reducer";

const entities = combineReducers({
  users,
  events,
  registrations
});

export default entities;