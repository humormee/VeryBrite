import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../events/event_item';

class Tickets extends React.Component {

  componentDidMount() {
    return (
      this.props.fetchEvents(),
      this.props.fetchRegistrations()
    )
    this.findUserTickets = this.findUserTickets.bind(this);
    this.renderTickets = this.renderTickets.bind(this);
    this.findUserEvents.bind(this);
  }

  findUserTickets() {
    
    if(!this.props.registrations) {
      return (
        <div>No Registrations, sad</div>
      )
    }

    let { user } = this.props;
    let registrations = Object.values(this.props.registrations)
    let regs = [];
    registrations.forEach(reg => {
      if(reg.attendee_id === user){
        regs.push(reg)
      }
    })
    return regs;
  }

  findUserEvents() {
    let regs = this.findUserTickets();
    let events = Object.values(this.props.events);
    let userEvents = [];
    
    events.forEach(event => {
      regs.forEach(reg => {
        debugger
        if(event.id === reg.event_id) {
          userEvents.push(event)
        }
      })
      
    })
    debugger
    return userEvents;
  }
  
  renderEvents() {
    let { fetchEvent } = this.props
    let events = this.findUserEvents();

    return (
      events.map(event => (
      <div className="registration-index-item-container" id={`${event.id}`} key={`${event.id}`}>
            <Link to={`./events/${event.id}`}>
              <div className="registration-index-item-image">
              </div>
            </Link>
        <div className="registration-index-item">
          <Link onClick={this.handleClick} to={`../../events/${event.id}`}>{event.title}</Link>
          <EventItem fetchEvent={fetchEvent} event={event} ></EventItem>
        </div>
      </div>
    ))
    )
    
  }

  render () {
    if(!this.props.registrations){
      return null;
    }
    return (
      <ul className="registrations-index">
      {this.renderEvents()}
    </ul>
    )
    
  }
}

export default Tickets;