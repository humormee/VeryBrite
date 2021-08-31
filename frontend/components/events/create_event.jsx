import React from 'react';

class CreateEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author_id: "",
      category: "",
      title: "",
      description: "",
      start_time: "",
      end_time: "",
      current_time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({author_id: this.props.userId})
    this.setState({current_time: this.getCurrentTime()})
  }

  getCurrentTime() {
    let today = new Date();
    let min = today.getMinutes();
    let hh = today.getHours();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    let yyyy = today.getFullYear();
    if(min<10){
      min='0'+min
    } 
    if(hh<10){
      hh='0'+hh
    } 
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    } 
    return yyyy+'-'+mm+'-'+dd+'T'+hh+ ":"+min;
  }

  renderErrors(field) {
    switch (field) {
      case 'title':
        if(this.state.title.length >= 40) {
          return (
            <p className="title-errors">titles must be under 40 characters</p>
          );
        } else {
          return null
        }
      case 'category':
        if(this.state.category.length < 2){
          return (
            <p className="category-errors">must select a category</p>
          )
        } else {
          return null;
        }
       
      case 'description':
        if(this.state.description.length < 1) {
          return (
            <p className="description-errors">add a description</p>
          )
        } else {
          return null;
        }
      case 'start_time':
        if(this.state.start_time < this.getCurrentTime() && this.state.start_time.length > 0) {
          return (
            <p className="date-errors">Start time must be after the current time</p>
          );
        } else {
          return null
        }
        
      case 'end_time':
        if(this.state.start_time > this.state.end_time && this.state.end_time.length > 0) {
          return (
            <p className="date-errors">Start time must be before end time</p>
          );
        } else {
          return null
        }
      default:
        break;
    }
  }

  isErrors() {
    if(this.renderErrors('title') === null && this.renderErrors('start_time') === null && this.renderErrors('end_time') === null && (this.renderErrors('category') === null) && this.renderErrors('description') === null) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.isErrors()) {
      return
    }
    this.setState({author_id: this.props.userId});
    this.props.createEvent(this.state).then(event => this.props.history.push(`/events/${event.event.id}`));
  }

  update(e, field) {
    if(field === 'title' && e.currentTarget.value.length > 40) {
      return
    } else if(field === 'end_time' && e.currentTarget.value < this.state.start_time) {
      return (
        <p className="date-errors">Start time must be before end time</p>
      )
    }
    this.setState({ [field]: e.currentTarget.value });
  }



  render() {

    if (!this.state) {
      return null;
    }
    

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
                <div>{this.renderErrors('title')}</div>
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
                  <div id="find-cat-error"></div>
                  
                  <div>{this.renderErrors('category')}</div>
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
                <div>{this.renderErrors('start_time')}</div>
                <p>Start day and time (click right icon for calendar view)</p>
                  <input id="start-date" 
                  type="datetime-local"
                  min={this.getCurrentTime()}
                  value={start_time}
                  onChange={e => this.update(e, 'start_time')}/>
                  <br />
                  <div>{this.renderErrors('end_time')}</div>
                  <p>End day and time (click right icon for calendar view)</p>
                  <input id="end-date" 
                  type="datetime-local"
                  min={this.state.start_time}
                  value={end_time}
                  onChange={e => this.update(e, 'end_time')}/>
              </div>
              
              
              <div className="description-container">
                <div className="description">
                  <i class="far fa-sticky-note fa-3x"></i>
                  <h3>Description</h3>
                </div>
                  <div>{this.renderErrors('description')}</div>
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