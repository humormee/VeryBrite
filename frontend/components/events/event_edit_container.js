import { connect } from 'react-redux';
import EventEdit from './event_edit';
import { fetchEvent, updateEvent, deleteEvent } from "../../actions/event_actions";


const mSTP = (state, ownProps) => {
  return ({
    event: state.entities.events[ownProps.match.params.id]
  })
  
}

const mDTP = dispatch => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  updateEvent: event => dispatch(updateEvent(event))
})

export default connect(mSTP, mDTP)(EventEdit)