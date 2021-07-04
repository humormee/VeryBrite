import { combineReducers } from "redux";
import users from "./users_reducer"

const entities = combineReducers({
  users
});

export default entities;