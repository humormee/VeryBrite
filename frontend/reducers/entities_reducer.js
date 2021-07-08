import { combineReducers } from "redux";
import users from "./users_reducer";
import events from "./events_reducer";

const entities = combineReducers({
  users,
  events
});

export default entities;