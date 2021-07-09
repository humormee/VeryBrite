import React from "react";
import EventShow from "./event_show";

class EventEdit extends React.Component {
  constructor(props) {
    super(props);

    state = {
      title: this.props.title,
      category: this.props.category,
      description: this.props.description,
      start_time: this.props.start_time,
      end_time: this.props.end_time
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){

  }

  update(e){

  }

  render(){
    return (
      <div className="edit-form-container">
        <div>
          <form className="edit-form">
            
          </form>
        </div>
      </div>
    )
  }
}

export default EventEdit;