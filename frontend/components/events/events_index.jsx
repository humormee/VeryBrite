import React from "react";
import { Link } from "react-router-dom";
// import events from "../../reducers/events_reducer";
import EventItem from "./event_item";

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      start_time: '',
      end_time: '',
      // isFetching: false
    }
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
    // this.state.isFetching = true;
    this.props.fetchEvents();
  }

  handleClick() {
    // this.props.history.push(`/events/${this.props.event.id}`)
  }

  render() {

    

    const { events, fetchEvent } = this.props

    // debugger
    let eventItems = events.map(event => (
      <Link onClick={this.handleClick} to={`./events/${event.id}`}><EventItem fetchEvent={fetchEvent} event={event} key={`${event.id}`}></EventItem></Link>
    ))
    debugger

    return (
      <div className="event-index-container">
        <ul className="event-index">
          {eventItems}
        </ul>
      </div>
    );
  }
}

export default EventsIndex;