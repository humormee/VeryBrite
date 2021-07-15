import React from 'react'

class Tickets extends React.Component {

  componentDidMount() {
    debugger
    return (
      this.props.fetchEvents(),
      this.props.fetchRegistrations()
    )
  }
  render () {
    debugger
    if(!this.props.events){
      return null;
    }

    return ;
  }
}

export default Tickets;