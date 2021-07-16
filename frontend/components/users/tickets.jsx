import React from 'react'

class Tickets extends React.Component {

  componentDidMount() {
    return (
      this.props.fetchEvents(),
      this.props.fetchRegistrations()
    )
  }
  render () {
    if(!this.props.events){
      return null;
    }

    return ;
  }
}

export default Tickets;