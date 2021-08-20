import React from 'react';

class EventItem extends React.Component {
  constructor(props) {
    super(props)
  }

  renderHeart() {
    
  }

  render() {
    const { title, start_time, end_time, category }  = this.props.event;
    const startDate = new Date(start_time.slice(0,-1))
    const startDateString = startDate.toDateString();
    const formatTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    // const start_date_time = new Date(start_time).toString();
    // const end_date_time = new Date(end_time).toString();
    // const format_date = Date.parse(start_time);
    // const formatTime = new Date(start_time.getTime());
    
    return (
      
      <div className="event-item-container">
        <div className="event-item">
          {/* <Link to="api/events/${}"className="event-item-image"> */}
            <div></div>
          {/* </Link> */}
          <div className="like">
            <p>Heart</p>
          </div>
          <div className="event-item-info">
            
            <div className="event-item-dates">
              <p className="event-item-starttime">{startDateString}, {formatTime}</p>
              
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default EventItem;