import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../events/event_item';

class Likes extends React.Component {

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchLikes();
    debugger
    this.findUserLikes = this.findUserLikes.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
    this.findUserEvents = this.findUserEvents.bind(this);
  }

  findUserLikes() {
    
    if(!this.props.likes) {
      return (
        <div>No likes, sad</div>
      )
    }

    let { user } = this.props;
    let likes = this.props.likes;
    let userLikes = [];
    debugger
    likes.forEach(like => {
      debugger
      if(like.liker_id === user){
        userLikes.push(like)
      }
    })
    // debugger
    return userLikes;
  }

  findUserEvents() {
    let likes = this.findUserLikes();
    let events = Object.values(this.props.events);
    let userEvents = [];
    
    events.forEach(event => {
      likes.forEach(like => {
        if(event.id === like.event_id) {
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
      <div className="likes-index-item-container" id={`${event.id}`} key={`${event.id}`}>
            <Link to={`./events/${event.id}`}>
              <div className="likes-index-item-image">
              </div>
            </Link>
        <div className="like-index-item">
          <Link onClick={this.handleClick} to={`../../events/${event.id}`}>{event.title}</Link>
          <EventItem fetchEvent={fetchEvent} event={event} ></EventItem>
        </div>
      </div>
    ))
    )
    
  }

  render () {
    if(!this.props.likes){
      return null;
    }
    return (
      <ul className="likes-index">
      {this.renderEvents()}
    </ul>
    )
    
  }
}

export default Likes;