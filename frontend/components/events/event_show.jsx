import React from 'react';
import EventItem from './event_item';

class EventShow extends React.Component {

  constructor(props){
    super(props)
    
  }

  componentDidMount() {
    debugger
    this.props.fetchEvent(this.props.match.params.id);
  }

  render() {

    if (!this.props.event) {
      return null;
    }
    // let eventItem = <EventItem event={this.props.event}></EventItem>
    const { title, start_time, end_time, category, description }  = this.props.event;
    const start_date_time = new Date(start_time).toString();
    const end_date_time = new Date(end_time).toString();

    debugger
    return (
      <div className="event-show-container">
        <div className="event-show">
          <div className="event-show-details">
            <h1 className="event-show-title">{title}</h1>
            <h3 className="event-show-category">{category}</h3>
            <p className="event-show-start-time">{start_date_time}</p>
            <p className="event-show-end-time">{end_date_time}</p>
            <div className="event-show-description">{description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;