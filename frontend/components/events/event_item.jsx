import React from 'react';

class EventItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    debugger
    return (
      <div className="event-item-container">
        <div className="event-item">
          <div className="event-item-info">
            <p className="event-item-title">{this.props.event.title}</p>
            <div className="event-item-dates">
              <p className="event-item-starttime">{this.props.event.start_time}</p>
              <p className="event-item-endtime">{this.props.event.end_time}</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default EventItem;