import { combineReducers } from "redux";

import sessionErrors from "./session_errors_reducer";

const errors = combineReducers({
  session: sessionErrors
});

export default errors;
