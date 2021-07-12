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
import EventShowContainer from './events/event_show_container';
import EventEditContainer from './events/event_edit_container';
import CreateEventContainer from './events/create_event_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div className="app">
    <header>
    <Route path="/" component={GreetingContainer}></Route>
      </header>
      
      <Switch>
        {/* <Route exact path="/events/:id" component={EventShowContainer}></Route> */}
        <AuthRoute exact path="/signin" component={SignInFormContainer}/>
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
        <Route exact path="/" component=  {EventsIndexContainer}></Route>
        <Route exact path="/events/create" component={CreateEventContainer}></Route>
        <Route exact path="/events/:id" component={EventShowContainer}></Route>
        
        <ProtectedRoute exact path="/events/:id/edit" component={EventEditContainer}></ProtectedRoute>
        
      </Switch>
  </div>
);

export default App;