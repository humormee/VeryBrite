import React from 'react';

class EventItem extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    const { title, start_time, end_time, category }  = this.props.event;
    const startDate = new Date(start_time)
    const startDateString = startDate.toDateString();
    const formatTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    // const start_date_time = new Date(start_time).toString();
    // const end_date_time = new Date(end_time).toString();
    // const format_date = Date.parse(start_time);
    // const formatTime = new Date(start_time.getTime());
    // debugger
    
    return (
      
      <div className="event-item-container">
        <div className="event-item">
          <div className="event-item-info">
            {/* <p>{category}</p> */}
            {/* <p className="event-item-title">{title}</p> */}
            <div className="event-item-dates">
              <p className="event-item-starttime">{startDateString}, {formatTime}</p>
              {/* <p className="event-item-endtime">{end_date_time}</p> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default EventItem;