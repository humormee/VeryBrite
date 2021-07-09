import React from 'react';

class EventItem extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    const { title, start_time, end_time, category }  = this.props.event;
    const start_date_time = new Date(start_time).toString();
    const end_date_time = new Date(end_time).toString();

    debugger
    
    return (
      
      <div className="event-item-container">
        <div className="event-item">
          <div className="event-item-info">
            <p>{category}</p>
            <p className="event-item-title">{title}</p>
            <div className="event-item-dates">
              <p className="event-item-starttime">{start_date_time}</p>
              <p className="event-item-endtime">{end_date_time}</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default EventItem;