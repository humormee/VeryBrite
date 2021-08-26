import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../events/event_item';

class Tickets extends React.Component {

  componentDidMount() {
    return (
      this.props.fetchEvents(),
      this.props.fetchRegistrations()
    )
    this.findTicketedEvents = this.findTicketedEvents.bind(this);
    this.renderTickets = this.renderTickets.bind(this);
    this.findUserEvents.bind(this);
    this.registrationButton = this.registrationButton.bind(this);
  }

    registrationButton(e) {
    let isOwnReg = false;
    let { user } = this.props;
    let regArr = Object.values(this.props.registrations);
    let regToHandle;
    regArr.forEach(reg => {
      debugger
      // if (reg.attendee_id === user.id && reg.event_id === event.id){
      if (reg.attendee_id === user.id){
        regToHandle = reg;
        isOwnReg = true;
      }
    })

    if(isOwnReg) {
      return (<>
      <button  value={regToHandle.event_id} onClick={(e) => this.handleDeleteRegistration(e,regToHandle)}>UNREGISTER</button>
      </>
      )
    } else {
      return <button value={regToHandle.event_id} onClick={(e) => this.handleRegistration(e, regToHandle)}>REGISTER</button>
    }
  }

  handleDeleteRegistration(e, reg) {
    let { user } = this.props;
    let regArr = Object.values(this.props.registrations);
    let regToDelete;
    // regArr.forEach(reg => {
    //   // if(reg.attendee_id == user.id && reg.event_id == this.props.event.id) {
    //   if(reg.attendee_id == user.id) {
    //     regToDelete = reg
    //   }
    // })
    this.props.deleteRegistration(reg)
  }

  handleRegistration(e, reg) {
    
    this.props.createRegistration(reg)
  }

  findTicketedEvents() {
    
    if(!this.props.registrations) {
      return (
        <div>No Registrations, sad</div>
      )
    }

    let { user } = this.props;
    let registrations = Object.values(this.props.registrations)
    let regs = [];
    registrations.forEach(reg => {
      if(reg.attendee_id === user.id){
        regs.push(reg)
      }
    })
    return regs;
  }

  findUserEvents() {
    let regs = this.findTicketedEvents();
    let events = Object.values(this.props.events);
    let userEvents = [];
    
    events.forEach(event => {
      regs.forEach(reg => {
        if(event.id === reg.event_id) {
          userEvents.push(event)
        }
      })
      
    })
    return userEvents;
  }
  
  renderEvents() {
    let { fetchEvent } = this.props
    let events = this.findUserEvents();

    return (
      events.map(event => (
      <div className="registration-index-item-container" id={`${event.id}`} key={`${event.id}`}>
            <Link to={`../../events/${event.id}`}>
              <div className="registration-index-item-image">
              </div>
            </Link>
        <div className="registration-index-item">
          <Link onClick={this.handleClick} to={`../../events/${event.id}`}>{event.title}</Link>
          <EventItem fetchEvent={fetchEvent} event={event}></EventItem>
        </div>
        <div className="show-buttons-container">
            {/* <div className="like">{this.renderLike()}</div> */}
            <div className="registration">{this.registrationButton()}</div>
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