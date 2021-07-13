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
              <h3>Title</h3>
                <div className="title">
                  <i class="fas fa-align-justify fa-3x"></i>
                  <input className="event-edit-title" type="text" value={title}
                  onChange={e => this.update(e, 'title')}/>
                </div>
              </div>
              
              <div className="start-date-container">
                <h3>When should the event start?</h3>
                <div className="start-date">
                  <i className="far fa-calendar-alt fa-3x"></i>
                  <input id="start-date" type="datetime-local" value={start_time.slice(0,-1)} onChange={e => this.update(e, 'start_time')}/>
                </div>
              </div>
              
              <div className="end-date-container">
                <h3>When should the event end?</h3>
                <div className="end-date">
                  <i className="far fa-calendar-alt fa-3x"></i>
                  <input id="end-date" type="datetime-local" value={end_time.slice(0, -1)} onChange={e => this.update(e, 'end_time')}/>
                </div>
              </div>
                
              
              <div className="description-container">
                <h3>Give a description of the event:</h3>
                <div className="description">
                  <i className="far fa-sticky-note fa-3x"></i>
                  <textarea value={description}cols="30" rows="10" onChange={e => this.update(e, 'description')}></textarea>
                </div>
              </div>
              
             
           
            </div>
            {/* <button onClick={e => this.handleSubmit(e)}>Update</button> */}
          </form>
        
      </div>
    )
  }
}

export default EventEdit;