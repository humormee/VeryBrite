import React from "react";
import ReactDOM from "react-dom";
import { signin, signup, signout } from './util/session_api_util'
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  window.signin = signin;
  window.signup = signup;
  window.signout = signout;
  
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});

