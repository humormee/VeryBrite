import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from '../events/event_item';

class Likes extends React.Component {

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchLikes();
    this.findLikedEvents = this.findLikedEvents.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
    this.findUserEvents = this.findUserEvents.bind(this);
  }

  findLikedEvents() {
    
    if(!this.props.likes) {
      return (
        <div>No likes, sad</div>
      )
    }

    let { user } = this.props;
    let likes = this.props.likes;
    let userLikes = [];
    likes.forEach(like => {
      if(like.liker_id === user.id){
        userLikes.push(like)
      }
    })
    let likedEvents = this.findUserEvents(userLikes)
    return likedEvents;
  }

  
  findUserEvents(userLikes) {
    let { user } = this.props;
    let likes = userLikes;
    let events = Object.values(this.props.events);
    let userEvents = [];
    
    events.forEach(event => {
      likes.forEach(like => {
        if(event.id === like.event_id && user.id === like.liker_id) {
          userEvents.push(event)
        }
      })
      
    })
    return userEvents;
  }

  
  renderEvents() {
    const { user, events, fetchEvent, likes, createLike, deleteLike } = this.props
    let likedEvents = this.findLikedEvents();
    let mappedEvents = likedEvents.map(event => (
      <div 
      className="likes-index-item-container" id={`${event.id}`} key={`${event.id}`}>
        <div className="image-div-background">
          <Link className="likes-index-item-image" to={`../../events/${event.id}`} height="100" width="100">
          </Link>
        </div>
            
        <div className="like-index-item">
          <Link onClick={this.handleClick} to={`../../events/${event.id}`}>{event.title}</Link>
          <EventItem user={user} createLike={createLike} deleteLike={deleteLike} likes={likes} fetchEvent={fetchEvent} event={event}></EventItem>
        </div>
      </div>
    ))
    return (
      <>
        <h1>My Bookmarks</h1>
        {mappedEvents}
      </>
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