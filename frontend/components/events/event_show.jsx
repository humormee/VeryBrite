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
    debugger
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
    const { author_id, title, start_time, end_time, category, description }  = this.props.event;
    const { user } = this.props.user;
    const start_date_time = new Date(start_time).toString();
    const end_date_time = new Date(end_time).toString();

    debugger
    return (
      <div className="event-show-container">
        <div className="event-show-background">

        </div>
        <div className="event-show">
          <div className="event-show-details">
            <h1 className="event-show-title">{title}</h1>
            <h3 className="event-show-category">{category}</h3>
            <p className="event-show-start-time">{start_date_time}</p>
            <p className="event-show-end-time">{end_date_time}</p>
            <div className="event-show-description">{description}</div>
            <p>{author_id}</p>
            <p>{this.renderButton()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;