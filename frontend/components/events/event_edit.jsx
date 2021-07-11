import React from "react";
import EventShow from "./event_show";

class EventEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      category: this.props.category,
      description: this.props.description,
      start_time: this.props.start_time,
      end_time: this.props.end_time
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    e.preventDefault();
    this.props.updateEvent(this.state).then(event => this.props.history.push(`/events/${event.id}`))
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value})
  }

  render(){
    debugger
    if (!this.props.event) {
      return null;
    }
    // let eventItem = <EventItem event={this.props.event}></EventItem>
    const { title, start_time, end_time, category, description }  = this.props.event;
    const start_date_time = new Date(start_time).toString();
    const end_date_time = new Date(end_time).toString();
    
    return (
      <div className="edit-form-container">
        <div>
          <h1>Edit Form</h1>
          <form className="edit-form">
            <div className="event-edit-details">
              <input className="event-edit-title" type="text" value={title}
              onChange={event => this.update('event')}/>
              {/* <h1 className="event-show-title">{title}</h1> */}
              <input type="text" value={category} onChange={event => this.update('category')}/>
              {/* <h3 className="event-show-category">{category}</h3> */}
              <input type="date" value={start_date_time} onChange={event => this.update('start_date_time')}/>
              {/* <p className="event-show-start-time">{start_date_time}</p> */}
              <input type="date" value={end_date_time} onChange={event => this.update('end_date_time')}/>
              {/* <p className="event-show-end-time">{end_date_time}</p> */}
              <textarea value={description}cols="30" rows="10" onChange={event => this.update('description')}></textarea>
              <div className="event-show-description">{description}</div>
              <button onSubmit={this.handleSubmit}>Update</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EventEdit;