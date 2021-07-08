import React from "react";
import {
  Switch,
  Link,
  Route
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import EventsIndexContainer from './events/events_index_container';
// import EventsIndex from "./events/events_index";
// import EventItem from "./events/event_item";
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div className="app">
    <header>
    <Route exact path="/" component={GreetingContainer}></Route>
      </header>
      
      <Switch>
        <Route exact path="/" component={EventsIndexContainer}></Route>
        <AuthRoute exact path="/signin" component={SignInFormContainer}/>
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
      </Switch>
  </div>
);

export default App;