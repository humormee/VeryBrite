import { createEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import CreateEvent from './create_event';

const mSTP = state => ({
  event: {
    author_id: '',
    category: 'Free',
    title: '',
    description: '',
    start_time: '',
    end_time: ''
  },
  userId: state.session.id
})

const mDTP = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
})

export default connect(mSTP, mDTP)(CreateEvent);