import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

//--------- Development Store ----------//
const configureStore = (preloadedState = {}) =>(
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

//---- Production Store --------//
// const configureStore = (preloadedState = {}) =>(
//   createStore(rootReducer, preloadedState, applyMiddleware(thunk))
// );

export default configureStore;