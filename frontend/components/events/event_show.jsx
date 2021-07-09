import React from 'react';
import EventItem from './event_item';

class EventShow extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  render() {

    let eventItem = <EventItem event={this.props.event}></EventItem>
    debugger
    return (
      <div className="event-show-container">
        <div className="event-show">
          <div className="event-show-details">
            <div className="event-show-start-time">{eventItem}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;