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

              <div className="category-container">
                  <div>
                    <i class="fa-solid fa-list-ul fa-3x"></i>
                    <h3>Pick a Category</h3>
                  </div>
                 
                  <select value={category} onChange={e => this.update(e, 'category')}> 
                    <option>Select Category</option>
                    <option value="Music">Music</option>
                    <option value="Free">Free</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Charity and Causes">Charity and Causes</option>
                    <option value="Food and Drink">Food and Drink</option>
                    <option value="Other">Other</option>
                  </select>
               </div>
              
              <div className="start-date-container">
                <div className="start-date">
                  <i className="far fa-calendar-alt fa-3x"></i>
                  <h3>Date and time</h3>
                </div>
                <p>start date and time (click the right icon for calendar view)</p>
                
                  <input id="start-date" type="datetime-local" value={start_time.slice(0,-1)} onChange={e => this.handleStartDate(e)}/>
                  <p>end date and time (click the right icon for calendar view)</p>
                  <input id="end-date" type="datetime-local" value={end_time.slice(0, -1)} onChange={e => this.handleEndDate(e)}/>
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