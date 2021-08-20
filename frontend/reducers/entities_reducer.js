import { combineReducers } from "redux";
import users from "./users_reducer";
import events from "./events_reducer";
import registrations from "./registrations_reducer";
import likes from "./likes_reducer";

const entities = combineReducers({
  users,
  events,
  registrations,
  likes
});

export default entities;