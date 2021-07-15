import React from "react";
import EventShow from "./event_show";
// import DateTimePicker from 'react-datetime-picker';

class EventEdit extends React.Component {
  constructor(props) {
    super(props);

    if (props.event) {
      this.state = props.event
    }
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
  }


  componentDidMount(){

    this.props.fetchEvent(this.props.match.params.id)
        .then(action => {
          const { event } = action;
          this.setState ({
            id: event.id,
            title: event.title,
            category: event.category,
            description: event.description,
            start_time: event.start_time,
            end_time: event.end_time
          })
        })
  }
  

  handleSubmit(e){

    e.preventDefault();
    this.props.updateEvent(this.state).then((event) => {
      this.props.history.push(`/events/${event.event.id}`)
    })
  }

  handleStartDate(e){ 
    this.setState({ 'start_time': e.currentTarget.value.concat('Z')})
  }

  handleEndDate(e) {
    this.setState({ 'end_time': e.currentTarget.value.concat('Z')})
  }
 

  update(e, field){
    this.setState({ [field]: e.currentTarget.value})
  }

  render(){

    if (!this.state) {
      return null;
    }
 
    
      const { title, start_time, end_time, category, description }  = this.state;
    
    return (
      <div className="edit-form-container">
        
          <form className="edit-form">
            <div className="event-edit-details">

              <div className="title-container">
                <div className="title">
                  <i class="fas fa-align-justify fa-3x"></i>
                  <h3>Title</h3>
                </div>
                  <input className="event-edit-title" type="text" value={title}
                  onChange={e => this.update(e, 'title')}/>
              </div>
              
              <div className="start-date-container">
                <div className="start-date">
                  <i className="far fa-calendar-alt fa-3x"></i>
                  <h3>Date and time</h3>
                </div>
                <p>start date and time</p>
                <div>
                  <p>{start_time.toString()}</p>
                  <input id="start-date" type="datetime-local" value={start_time.slice(0,-1)} onChange={e => this.handleStartDate(e)}/>
                </div>
                  
                  <p>Event end date and time</p>
                  <div>
                    <p>{end_time.toString()}</p>
                    <input id="end-date" type="datetime-local" value={end_time.slice(0, -1)} onChange={e => this.handleEndDate(e)}/>
                  </div>
                </div>
              
              
              <div className="description-container">
                <div className="description">
                <i className="far fa-sticky-note fa-3x"></i>
                <h3>Description</h3>
                </div>
                  <textarea value={description}cols="30" rows="10" onChange={e => this.update(e, 'description')}></textarea>
              </div>
              
             <button onClick={e => this.handleSubmit(e)}>Update</button>
           
            </div>
            
          </form>
        
      </div>
    )
  }
}

export default EventEdit;