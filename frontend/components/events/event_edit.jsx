import React from "react";
import EventShow from "./event_show";

class EventEdit extends React.Component {
  constructor(props) {
    super(props);

    debugger
    props.fetchEvent(props.match.params.id)
    debugger
    this.state = {
      id: props.event.id,
      title: props.event.title,
      category: props.event.category,
      description: props.event.description,
      start_time: props.event.start_time,
      end_time: props.event.end_time
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.id)
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
    // debugger
    // if (!this.props.event) {
    //   return null;
    // }
    // let eventItem = <EventItem event={this.props.event}></EventItem>
    const { title, start_time, end_time, category, description }  = this.state;
    // const start_date_time = new Date(start_time).toString();
    // const end_date_time = new Date(end_time).toString();
    
    return (
      <div className="edit-form-container">
        <div>
          {/* <h1>Edit Form</h1> */}
          <form className="edit-form">
            <div className="event-edit-details">
              <h3>Title</h3>
              <input className="event-edit-title" type="text" value={title}
              onChange={e => this.update(e, 'title')}/>
              {/* <h1 className="event-show-title">{title}</h1> */}
              <h3>Pick a category:</h3>
              {/* <input type="text" onChange={e => this.update(e, 'category')} value={category} /> */}
              <select selected value={category} onChange={e => this.update(e, 'category')}>
                <option disabled>pick a category</option>
                <option value="Activities">Acitivities</option>
                <option value="Free">Free</option>
                <option value="Charity and Causes">Charisty and Causes</option>
                <option value="Food and Drink">Food and Drink</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Music">Music</option>
              </select>
              {/* <input type="text" value={category} onChange={e => this.update(e, 'category')}/> */}
              {/* <h3 className="event-show-category">{category}</h3> */}
              <h3>When should the event start?</h3>
              <input type="datetime-local" value={start_time} onChange={e => this.update(e, 'start_time')}/>
              {/* <p className="event-show-start-time">{start_date_time}</p> */}
              <h3>When should the event end?</h3>
              <input type="datetime-local" value={end_time} onChange={e => this.update(e, 'end_time')}/>
              {/* <p className="event-show-end-time">{end_date_time}</p> */}
              <h3>Give a description of the event:</h3>
              <textarea value={description}cols="30" rows="10" onChange={e => this.update(e, 'description')}></textarea>
              {/* <div className="event-show-description">{description}</div> */}
            </div>
            <button onClick={e => this.handleSubmit(e)}>Update</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EventEdit;