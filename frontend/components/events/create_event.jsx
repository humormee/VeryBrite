import React from 'react';

class CreateEvent extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = {
      author_id: "",
      category: "Free",
      title: "",
      description: "",
      start_time: "",
      end_time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    debugger
    this.setState({author_id: this.props.userId})
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.setState({author_id: this.props.userId})
    this.props.createEvent(this.state).then(event => this.props.history.push(`/events/${event.event.id}`));
  }

  update(e, field) {
    // debugger
    this.setState({ [field]: e.currentTarget.value });
  }



  render() {

    if (!this.state) {
      return null;
    }
 
    
    const { title, start_time, end_time, category, description }  = this.state;
    
    return (
      <div className="create-form-container">
        <div>
          <form className="create-form">
            <div className="event-create-details">
              <h3>Title</h3>
              <input className="event-create-title" type="text"
              value={title}
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
              <input id="start-date" type="datetime-local"
              value={start_time}
              onChange={e => this.update(e, 'start_time')}/>
              <h3>When should the event end?</h3>
            
              <input id="end-date" type="datetime-local"
              value={end_time}
              onChange={e => this.update(e, 'end_time')}/>
              
              <h3>Give a description of the event:</h3>
              <textarea value={description}
              cols="30" rows="10" onChange={e => this.update(e, 'description')}></textarea>
              
            </div>
            <button onClick={e => this.handleSubmit(e)}>Create</button>
          </form>
        </div>
      </div>
    )
  }
  
}

export default CreateEvent;