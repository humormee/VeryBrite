import React from 'react';
import { Link } from 'react-router-dom';
import EventItem from './event_item';
import EventEdit from './event_edit';

class EventShow extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      index: null
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleDeleteRegistration = this.handleDeleteRegistration.bind(this);
    this.registrationButton = this.registrationButton.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.renderLike = this.renderLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
    this.props.fetchRegistrations(this.props.match.params.id);
    this.props.fetchLikes(this.props.user.id);
  }



  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/events/${e.currentTarget.value}/edit`)
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteEvent(this.props.match.params.id)
    .then(() => this.props.history.push('/'));
  }

  registrationButton(e) {
    let isOwnReg = false;
    
    let regArr = Object.values(this.props.registrations);
    regArr.forEach(reg => {
      if (reg.attendee_id === this.props.user.id && reg.event_id === this.props.event.id){
        isOwnReg = true;
      }
    })

    if(isOwnReg) {
      return (<>
      <button  value={this.props.event.id} onClick={() => this.handleDeleteRegistration()}>UNREGISTER</button>
      </>
      )
    } else {
      return <button value={this.props.event.id} onClick={() => this.handleRegistration()}>REGISTER</button>
    }
  }

  renderLike() {
    if(!this.props.likes){
      return null;
    }
    let { likes } = this.props;
    let eventId = this.props.match.params.id;
    let userId = this.props.user.id;

    let likesArr = Object.values(likes);
    let text = <i class="far fa-bookmark fa-lg"></i>;;


    for(let i = 0; i < likesArr.length; i++) {
      if(userId === likesArr[i].liker_id && likesArr[i].event_id === parseInt(eventId)) {
          text = <i class="fas fa-bookmark fa-lg"></i>;
      }
    }
  
    return <button  value={this.props.event.id} onClick={() => this.handleLike()}>{text}</button>
  }

  handleLike() {

    if(!this.props.likes){
      return null;
    }

    let { likes } = this.props;
    let likesArr = Object.values(likes);
    let isDelete = false;
    let toDeleteLike;
    let event = this.props.match.params.id;
    let userId = this.props.user.id;

    likesArr.forEach(like => {
      if(userId === like.liker_id && parseInt(event) === like.event_id) {
        isDelete = true;
        toDeleteLike = like;

      }
    })
    if(isDelete) {
      this.props.deleteLike(toDeleteLike)
    } else {
      this.props.createLike({
      liker_id: this.props.user.id,
      event_id: this.props.event.id
      })
    }
    
  }

  

  handleRegistration() {
    
    this.props.createRegistration({
      attendee_id: this.props.user.id,
      event_id: this.props.event.id
    })
  }

  handleDeleteRegistration() {
    let regArr = Object.values(this.props.registrations);
    let regToDelete;
    regArr.forEach(reg => {
      if(reg.attendee_id == this.props.user.id && reg.event_id == this.props.event.id) {
        regToDelete = reg
      }
    })
    this.props.deleteRegistration(regToDelete)
  }

  renderButton(){

    const { user } = this.props;
    const { id } = this.props.user;
    const { author_id } = this.props.event;
    if(!!user && id === author_id){
      return (
        <div className="edit-delete-event">
          <button className="edit-event" value={this.props.event.id} onClick={this.handleEdit}>Edit Event</button>
          <button className="delete-event" value={this.props.event.id} onClick={this.handleDelete}>Delete Event</button>
        </div>
      )
    };
  }

  renderDate(start_time, end_time) {
    if(!start_time || !end_time) {
      return null;
    }
    const startDate = new Date(start_time.slice(0,-1));
    const endDate = new Date(end_time.slice(0, -1));

    const startDateString = startDate.toDateString();
    const endDateString = endDate.toDateString();
    
    const startDayMonthArr = startDateString.split(' ');
    const endDayMonthArr = endDate.toDateString();

    const startDayMonthString = startDayMonthArr[0].concat(', ').concat(`${startDayMonthArr[1]} `).concat(`${startDayMonthArr[2]}, `).concat(startDayMonthArr[3]);
    const endDayMonthString = endDayMonthArr[0].concat(', ').concat(`${endDayMonthArr[1]} `).concat(`${endDayMonthArr[2]}, `).concat(endDayMonthArr[3]);
    
    const startDateArr = startDateString.split(' ').slice(0,-1);
    const endDateArr = endDateString.split(' ').slice(0, -1);

    const monthDayString = startDateArr.join(' ');

    const formatStartTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    const formatEndTime = new Date(endDate.getTime())
          .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');

    let l = startDayMonthArr.length;
    let dateRange;

    if(startDateArr[0] !== endDateArr[0] || startDateArr[1] !== endDateArr[1]) {
      dateRange = `${startDateArr.join(' ')} - ${endDateArr.join(' ')}, ${startDayMonthArr[l-1]}`
    } else {
      dateRange = `${startDateArr.join(' ')}, ${startDayMonthArr[l-1]}`
    }

    return dateRange;
  }

  render() {

    if (!this.props.event) {
      return null;
    }
    const { authorFName, authorLName, author_id, title, start_time, end_time, category, description }  = this.props.event;
    const { user } = this.props.user;

    // this.renderDate(start_time, end_time);

    const startDate = new Date(start_time.slice(0,-1));
    const endDate = new Date(end_time.slice(0, -1));

    const startDateString = startDate.toDateString();
    // const endDateString = endDate.toDateString();
    
    // const startDayMonthArr = startDateString.split(' ');
    // const endDayMonthArr = endDate.toDateString();

    // const startDayMonthString = startDayMonthArr[0].concat(', ').concat(`${startDayMonthArr[1]} `).concat(`${startDayMonthArr[2]}, `).concat(startDayMonthArr[3]);
    // const endDayMonthString = endDayMonthArr[0].concat(', ').concat(`${endDayMonthArr[1]} `).concat(`${endDayMonthArr[2]}, `).concat(endDayMonthArr[3]);
    
    const startDateArr = startDateString.split(' ').slice(1,-1);
    // const endDateArr = startDateString.split(' ').slice(1, -1);

    const monthDayString = startDateArr.join(' ');


    const formatStartTime = new Date(startDate.getTime())
            .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    const formatEndTime = new Date(endDate.getTime())
          .toLocaleTimeString().replace(/(.*)\D\d+/, '$1');

    return (
      <div className="event-show-container">
        
        <div className="event-show-background">
          <div className="background-image">
            
          </div>
        </div>

        <div className="event-show">
          <div className="event-show-details">
            <div className="event-show-image">
              <div></div>
            </div>
            <div className="event-show-basic-info">
              <div className="date">
                <h3 className="month">{monthDayString.split(" ")[0].toUpperCase()}</h3>
                <h3 className="day">{monthDayString.split(" ")[1]}</h3>
              </div>
              
              <div>
                <h1 className="event-show-title">{title}</h1>
                <h3 className="event-show-host">{`by ${authorFName} ${authorLName}`}</h3>
              </div>
              
              <h3 className="event-show-category">{category}</h3>
            </div>

            <div className="event-show-date-time">
              <p className="event-show-date">Date and time</p>
              <br />
              <p className="event-show-time">{this.renderDate(start_time, end_time)}
              <br />
              {`${formatStartTime} - ${formatEndTime}`}</p>
            </div>
            <div className="show-buttons-container">
              <div className="like">{this.renderLike()}</div>
              <div className="registration">{this.registrationButton()}</div>
            </div>
            

            <div className="event-show-other-details">
              <h2>About this event</h2>
              <div className="event-show-description">{description}</div>
            </div>

            <div className="delete-edit-container">{this.renderButton()}</div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;