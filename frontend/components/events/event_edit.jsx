import React from "react";
import EventShow from "./event_show";
// import DateTimePicker from 'react-datetime-picker';

class EventEdit extends React.Component {
  constructor(props) {
    super(props);

    debugger
    if (props.event) {
      // this.state = {
      //   id: props.event.id,
      //   title: props.event.title,
      //   category: props.event.category,
      //   description: props.event.description,
      //   start_time: props.event.start_time,
      //   end_time: props.event.end_time
      // }
      // debugger
      
      this.state = props.event
    }
    

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    debugger
    this.props.fetchEvent(this.props.match.params.id)
  }

  componentDidUpdate(prevProps, prevstate, snapshot){
    debugger
    if(prevProps !== this.props) {
      this.setState ({
        id: this.props.event.id,
        title: this.props.event.title,
        category: this.props.event.category,
        description: this.props.event.description,
        start_time: this.props.event.start_time,
        end_time: this.props.event.end_time
      })
    }
    

  }
  

  handleSubmit(e){

    e.preventDefault();
    this.props.updateEvent(this.state).then((event) => {
      this.props.history.push(`/events/${event.event.id}`)
    })
  }

 

  update(e, field){
    debugger
    this.setState({ [field]: e.currentTarget.value})
  }

  render(){
    // debugger

    if (!this.state) {
      return null;
    }
 
    
      const { title, start_time, end_time, category, description }  = this.state;
    
      debugger
        // document.getElementById("start-date").defaultValue = this.props.start_time;
      debugger
    
    return (
      <div className="edit-form-container">
        <div>
          {/* <h1>Edit Form</h1> */}
          <form className="edit-form">
            <div className="event-edit-details">
              <h3>Title</h3>
              <input className="event-edit-title" type="text" value={title}
              onChange={e => this.update(e, 'title')}/>
              
              {/* <h3>Pick a category:</h3> */}
              
              {/* <select selected value={category} onChange={e => this.update(e, 'category')}>
                <option disabled>pick a category</option>
                <option value="Activities">Acitivities</option>
                <option value="Free">Free</option>
                <option value="Charity and Causes">Charisty and Causes</option>
                <option value="Food and Drink">Food and Drink</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Music">Music</option>
              </select> */}
             
              <h3>When should the event start?</h3>
              <input id="start-date" type="datetime-local" value={start_time} onChange={e => this.update(e, 'start_time')}/>
              {/* <p className="event-show-start-time">{start_date_time}</p> */}
              <h3>When should the event end?</h3>
              {/* <DateTimePicker value={end_time} onChange={e => this.update(e, 'end_time')}/> */}
              <input id="end-date" type="datetime-local" value={end_time} onChange={e => this.update(e, 'end_time')}/>
              
              <h3>Give a description of the event:</h3>
              <textarea value={description}cols="30" rows="10" onChange={e => this.update(e, 'description')}></textarea>
           
            </div>
            <button onClick={e => this.handleSubmit(e)}>Update</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EventEdit;