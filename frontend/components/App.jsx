import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {
  Switch,
  Link,
  Route
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/'

const App = () => (
  <div>
    <header>
    <Link to="/"
    className="header-link">
      <h1>VeryBrite</h1>
      </Link>
      <GreetingContainer />
      </header>
      <Switch>
        <Route exact path="/signin" component={SignInFormContainer}></Route>
        <Route exact path="./signup" component={SignUpFormContainer}></Route>
      </Switch>
  </div>
);

export default App;