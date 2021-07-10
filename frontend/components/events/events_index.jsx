import React from "react";
import { Link } from "react-router-dom";
// import events from "../../reducers/events_reducer";
import EventItem from "./event_item";

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   id: '',
    //   author_id: '',
    //   category: '',
    //   title: '',
    //   description: '',
    //   start_time: '',
    //   end_time: '',
    // }
    // this.handleClick = this.handleClick.bind(this);
    // this.renderCreateButton = this.renderCreateButton.bind(this);
  }

  renderCreateButton(){
    // if
  }
  componentDidMount(){
    // this.state.isFetching = true;
    this.props.fetchEvents();
  }

  // handleClick() {
  //   // this.props.history.push(`/events/${this.props.event.id}`)
  // }

  render() {

    

    const { events, fetchEvent } = this.props

    // debugger
    

    let eventItems = events.map(event => (
      <div className="event-index-item-container" id={`${event.id}`} key={`${event.id}`}>
        {/* <h1>Events</h1> */}
        <div className="event-index-item">
          <Link onClick={this.handleClick} to={`./events/${event.id}`}>{event.title}</Link>
          {/* <div className="index-item-dates">
            <p>{event.start_date}</p>
            <p>{event.end_date}</p>
          </div> */}
          <EventItem fetchEvent={fetchEvent} event={event} ></EventItem>
        </div>
        
      </div>
    ))
    debugger

    return (
      <div className="event-index-container">
        <h1>Events</h1>
        <ul className="event-index">
          {eventItems}
        </ul>

        {this.renderCreateButton()}
      </div>
    );
  }
}

export default EventsIndex;