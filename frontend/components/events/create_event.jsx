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
 
    
    const { title, start_time, end_time, category, description }  = this.state;
    
    return (
      <div className="create-form-container">
          <form onSubmit={e => this.handleSubmit(e)}  className="create-form">
            <div className="event-create-details">

              <div className="title-container">
                <h3>Title</h3>
                <div className="title">
                  <i class="fas fa-align-justify fa-3x"></i>
                  <input className="event-create-title" type="text"
                  value={title}
                  onChange={e => this.update(e, 'title')}/>
                </div>
              </div>

              <div className="start-date-container">
                <h3>When should the event start?</h3>
                <div className="start-date">
                  <i className="far fa-calendar-alt fa-3x"></i>
                  <input id="start-date" type="datetime-local"
                  value={start_time}
                  onChange={e => this.update(e, 'start_time')}/>
                </div>
              </div>
              
              <div className="end-date-container">
                <h3>When should the event end?</h3>
                <div className="end-date">
                  <i className="far fa-calendar-alt fa-3x"></i>
                  <input id="end-date" type="datetime-local"
                  value={end_time}
                  onChange={e => this.update(e, 'end_time')}/>
                </div>
              </div>
            
              
              
              <div className="description-container">
                <h3>Give a description of the event:</h3>
                <div className="description">
                  <i class="far fa-sticky-note fa-3x"></i>
                  <textarea value={description}
                  cols="30" rows="10" onChange={e => this.update(e, 'description')}></textarea>
                </div>
              </div>

              <div>
                
            </div>
              
              
          </div>
          {/* <button type="submit">Create</button> */}
        </form>
      </div>
    )
  }
  
}

export default CreateEvent;