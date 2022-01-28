import React from 'react';

class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderLike = this.renderLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  renderLike() {

    if(!this.props.likes) {
      return null;
    }

    let { likes } = this.props;
    let eventId = this.props.event.id;
    let userId = this.props.user.id;

    let icon = <i class="far fa-bookmark fa-lg"></i>;
    for(let i = 0; i < likes.length; i++) {
      if(userId === likes[i].liker_id && likes[i].event_id === eventId) {
          icon = <i class="fas fa-bookmark fa-lg"></i>;
      }
    }
  
    return <button  value={this.props.event.id} onClick={() => this.handleLike()}>{icon}</button>
  }

  handleLike() {
    if(!this.props.likes){
      return null;
    }
    let { likes } = this.props;
    let isDelete = false;
    let toDeleteLike;
    let eventId = this.props.event.id;
    let userId = this.props.user.id;

    likes.forEach(like => {
      if(userId === like.liker_id && eventId === like.event_id) {
        isDelete = true;
        toDeleteLike = like;
      }
    })
    if(isDelete) {
      this.props.deleteLike(toDeleteLike)
    } else {
      this.props.createLike({
      liker_id: userId,
      event_id: eventId
      })
    }
  }

  render() {
    
    const { title, start_time, end_time, category }  = this.props.event;
    const startDate = new Date(start_time.slice(0,-1))
    const startDateString = startDate.toDateString();
    const formatTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    return (
      
      <div className="event-item-container">
        <div className="event-item">
          
          <div className="event-item-info">
            
            <div className="event-item-dates">
              <p className="event-item-starttime">{startDateString}, {formatTime}</p>
              
            </div>

          </div>
            <div className="like">
              {this.renderLike()}
            </div>
        </div>

      </div>
    );
  }
}

export default EventItem;