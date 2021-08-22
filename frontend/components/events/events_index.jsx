import React from "react";
import { Link } from "react-router-dom";
import EventItem from "./event_item";
// import index_header from "../../../app/assets/images/index_header.jpg"

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  renderCreateButton(){
    // if
  }
  componentDidMount(){
    this.props.fetchEvents();
    this.props.fetchLikes();
  }

  render() {

    

    const { user, events, fetchEvent, likes, createLike, deleteLike } = this.props

    let eventItems = events.map(event => (
      <div className="event-index-item-container" id={`${event.id}`} key={`${event.id}`}>
            <Link to={`./events/${event.id}`}>
              <div className="event-index-item-image">
              </div>
            </Link>
          
        <div className="event-index-item">
          
          <Link onClick={this.handleClick} to={`./events/${event.id}`}>{event.title}</Link>
          
          <EventItem user={user} createLike={createLike} deleteLike={deleteLike} likes={likes} fetchEvent={fetchEvent} event={event} ></EventItem>
        </div>
        
      </div>
    ))

    return (
      <div>
       <div className="index-header-container">
            <div className="index-header">
            <p></p>
          </div>
        </div>
        <h1 className="events-title">Find a <h1>very</h1> cool event near you </h1>
      <div className="event-index-container">
  
        <ul className="event-index">
          {eventItems}
        </ul>

        {this.renderCreateButton()}
      </div>
      </div>
    );
  }
}

export default EventsIndex;