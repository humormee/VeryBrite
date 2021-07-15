import { connect } from 'react-redux'
import { fetchRegistrations } from "../../actions/registration_actions";
import { fetchEvents } from "../../actions/event_actions";
import Tickets from './tickets';

mSTP = state => ({
  registrations: state.registrations,
  
})

mDTP = disptach => ({

})

export default connect(mSTP, mDTP)(Tickets);