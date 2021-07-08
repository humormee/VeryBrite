import React from "react";
import events from "../../reducers/events_reducer";
import EventItem from "./event_item";

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      start_time: '',
      end_time: ''
    }

  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  render() {

    const { events, fetchEvent } = this.props

    let eventItems = events.map(event => (
      <EventItem fetchEvent={fetchEvent} event={event} key={`${event.id}`}></EventItem>
    ))
    
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