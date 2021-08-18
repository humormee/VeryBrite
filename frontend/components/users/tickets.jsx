import React from 'react'

class Tickets extends React.Component {

  componentDidMount() {
    return (
      this.props.fetchEvents(),
      this.props.fetchRegistrations()
    )
    this.findUserTickets = this.findUserTickets.bind(this);
  }

  findUserTickets() {
    if(this.props.tickets.length < 1) {
      return (
        <div>No Registrations, sad</div>
      )
    }

    let { registrations, user } = this.props;
    // let { user } = this.props
    
    registrations.forEach(reg => {
      if(reg.attendee_id === user){
        
      }
    })
  }

  render () {
    debugger
    if(!this.props.tickets){
      return null;
    } else if(this.props.tickets.length < 1){
      return null;
    }
    this.findUserTickets();
    debugger
    return null;
  }
}

export default Tickets;