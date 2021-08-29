import React from 'react';

class CreateEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author_id: "",
      category: "", // Free
      title: "",
      description: "",
      start_time: "",
      end_time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({author_id: this.props.userId})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({author_id: this.props.userId});
    this.setState({category: "Free"});
    this.props.createEvent(this.state).then(event => this.props.history.push(`/events/${event.event.id}`));
  }

  update(e, field) {
    this.setState({ [field]: e.currentTarget.value });
  }



  render() {

    if (!this.state) {
      return null;
    }
    // CATEGORIES
    // 'Music'
    // 'Free'
    // 'Entertainment'
    // "Charity and Causes"
    // 'Food and Drink'
    // 'Other'
    
    const { title, start_time, end_time, category, description }  = this.state;
    
    return (
      <div className="create-form-container">
          <form onSubmit={e => this.handleSubmit(e)}  className="create-form">
            <div className="event-create-details">

              <div className="title-container">
                <div className="title">
                <i class="fas fa-align-justify fa-3x"></i>
                <h3>Title</h3>
                </div>
                <input className="event-create-title" 
                type="text" placeholder="enter a title"
                  value={title}
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
                 {/* <div className="genre-description-index">
                  <select value={category} onChange={e => this.update(e, 'category')}>

                  </select>
                 </div> */}
              

              <div className="start-date-container">
                <div className="start-date">
                <i className="far fa-calendar-alt fa-3x"></i>
                <h3>Date and time</h3>
                </div>
                <p>Start day and time (click right icon for calendar view)</p>
                  <input id="start-date" type="datetime-local"
                  value={start_time}
                  onChange={e => this.update(e, 'start_time')}/>
                  <br />
                  <p>End day and time (click right icon for calendar view)</p>
                  <input id="end-date" type="datetime-local"
                  value={end_time}
                  onChange={e => this.update(e, 'end_time')}/>
              </div>
              
              
              <div className="description-container">
                <div className="description">
                  <i class="far fa-sticky-note fa-3x"></i>
                  <h3>Description</h3>
                </div>
                  <textarea value={description} placeholder="describe the event"
                  cols="30" rows="10" onChange={e => this.update(e, 'description')}></textarea>
              </div>

              <button type="submit">Create</button>              
              
          </div>
          
        </form>
      </div>
    )
  }
  
}

export default CreateEvent;