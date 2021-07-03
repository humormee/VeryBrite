import React from "react";
import ReactDOM from "react-dom";
import { signin, signup, signout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  window.signin = signin;
  window.signup = signup;
  window.signout = signout;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to VeryBrite</h1>, root);
});