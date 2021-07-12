import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from './event_item';
import EventEdit from './event_edit';

class EventShow extends React.Component {

  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchEvent(this.props.match.params.id);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/events/${e.currentTarget.value}/edit`)
  }

  renderButton(){
    // debugger
    const { user } = this.props;
    const { id } = this.props.user;
    const { author_id } = this.props.event;
    if(user && id === author_id){
      return (
        <button value={this.props.event.id} onClick={this.handleEdit}>Edit Event</button>
      )
      // <Link to="/events/:id/edit"><EventEdit props={this.props}>Edit</EventEdit></Link>
    };
  }

  render() {

    if (!this.props.event) {
      return null;
    }
    // let eventItem = <EventItem event={this.props.event}></EventItem>
    // debugger
    const { authorFName, authorLName, author_id, title, start_time, end_time, category, description }  = this.props.event;
    const { user } = this.props.user;
    // const start_date_time = new Date(start_time).toString();
    // const end_date_time = new Date(end_time).toString();

    // const { title, start_time, end_time, category }  = this.props.event;
    // debugger

    //takes the z off end of start_time (was messing up conversions)


    const startDate = new Date(start_time.slice(0,-1));
    const endDate = new Date(end_time.slice(0,-1));
    const startDateString = startDate.toDateString();

    const startDateArr = startDateString.split(' ').slice(1,-1);
    const monthDayString = startDateArr.join(' ');


    const formatStartTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    const formatEndTime = new Date(endDate.getTime())
          .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
      
    // debugger
    return (
      <div className="event-show-container">
        
        <div className="event-show-background">
          <div className="background-image">
            
          </div>
        </div>
        <div className="event-show">
          <div className="event-show-details">
            <div className="event-show-image">
              <div></div>
            </div>
            <div className="event-show-basic-info">
              <div className="date">
                <h3 className="date">{monthDayString.split(" ")[0]}</h3>
                <h3>{monthDayString.split(" ")[1]}</h3>
              </div>
              
              <h1 className="event-show-title">{title}</h1>
              <h3 className="event-show-host">{`by ${authorFName} ${authorLName}`}</h3>
              <h3 className="event-show-category">{category}</h3>
            </div>

            <div className="event-show-date-time">
              <p className="event-show-date">Date and time</p>
              <br />
              <p className="event-show-time">{startDateString}
              <br />
              {`${formatStartTime} - ${formatEndTime}`}</p>
            </div>
            
            <div className="event-show-other-details">
              <h2>About this event</h2>
              
              {/* <p className="event-show-end-time">{formatEndTime}</p> */}
              <div className="event-show-description">{description}</div>
              {/* <p>{author_id}</p> */}
              <p>{this.renderButton()}</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;