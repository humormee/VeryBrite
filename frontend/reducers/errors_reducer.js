import { combineReducers } from "redux";

import sessionErrors from "./session_errors_reducer";
import eventErrors from "./event_errors_reducer";

const errors = combineReducers({
  session: sessionErrors,
  event: eventErrors
});

export default errors;
