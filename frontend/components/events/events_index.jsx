import React from "react";
import { Link } from "react-router-dom";
import EventItem from "./event_item";

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    };
  }

  renderCreateButton(){
  }
  componentDidMount(){
    this.props.fetchEvents();
    this.props.fetchLikes();
  }

  selectCategory(e, index) {
    this.setState({index: index})
  }

  renderEvents(events, index) {

  }

  render() {

    const CATEGORIES = [
      { name: 'All' },
      { name: 'Music' },
      { name: 'Entertainment'},
      { name: 'Free'},
      { name: 'Charity and Causes'},
      { name: 'Food and Drink'},
      { name: 'Other' }
    ]

    const { user, events, fetchEvent, likes, createLike, deleteLike } = this.props

    const selected = this.state.index;
    const categories = CATEGORIES.map((category, index) => {
      const cat = category.name;
      const currentClass = index === selected ? 'active' : '';
      return (
        <li key={index} className={currentClass} onClick={(e) => this.selectCategory(e, index)}>{cat}</li>
      )
    })

    let categoryEvents;
    switch (this.state.index) {
            case 0:
                categoryEvents = events;
                break;
            case 1:
                categoryEvents = events.filter(event => event.category === 'Music');
                break;
            case 2:
                categoryEvents = events.filter(event => event.category === 'Entertainment');
                break;
            case 3:
                categoryEvents = events.filter(event => event.category === 'Free');
                break;
            case 4:
                categoryEvents = events.filter(event => event.category === 'Charity and Causes');
                break;
            case 5:
                categoryEvents = events.filter(event => event.category === 'Food and Drink');
                break;
            case 6:
                categoryEvents = events.filter(event => event.category === 'Other');
                break;
            default:
                categoryEvents = events;
                break;
        }

    let eventItems = categoryEvents.map(event => (
      <div className="event-index-item-container" id={`${event.id}`} key={`${event.id}`}>
            <Link to={`./events/${event.id}`}>
              <div className="event-index-item-image">
              </div>
            </Link>
          
        <div className="event-index-item">
          
          <Link onClick={this.handleClick} to={`./events/${event.id}`}>{event.title}</Link>
          
          <EventItem user={user} createLike={createLike} deleteLike={deleteLike} likes={likes} fetchEvent={fetchEvent} event={event} ></EventItem>
        </div>
        
      </div>
    ))

    return (
      <div>
       <div className="index-header-container">
            <div className="index-header">
            <p></p>
          </div>
        </div>
        <h1 className="events-title">Find a <h1>very</h1> cool event near you </h1>
        <ul className="categories-list">{categories}</ul>
      <div className="event-index-container">
  
        <ul className="event-index">
          {eventItems}
        </ul>

        {this.renderCreateButton()}
      </div>
      </div>
    );
  }
}

export default EventsIndex;