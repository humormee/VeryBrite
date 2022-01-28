import React from "react";
import { Link } from "react-router-dom";
import EventItem from "./event_item";
import Footer from "../footer/footer";

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchEvents();
    this.props.fetchLikes();
  }

  showModal() {
    this.setState({show: true})
  }

  hideModal() {
    this.setState({show: false})
  }

  renderModal() {
    if(this.state.show) {
      return <Modal show={this.state.show} handleClose={this.hideModal}>
        <p>To register and bookmark events, <Link to="../../signin">signin</Link>  or <Link to="../../signup">signup</Link></p>
      </Modal>
    } else {
      return null
    }
  }

  selectCategory(e, index) {
    this.setState({index: index})
  }

  functionforscroll(e, id){

    e.preventDefault();

    document
      .getElementById(id)
      .scrollIntoView(
        {behavior: "smooth"}
      );
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
            <Link to={`../../events/${event.id}`}>
              <img className="event-index-item-image" src={event.image_url} alt={event.title} />
            </Link>
          
        <div className="event-index-item">
          
          <Link onClick={this.handleClick} to={`./events/${event.id}`}>{event.title}</Link>
          
          <EventItem user={user} createLike={createLike} deleteLike={deleteLike} likes={likes} fetchEvent={fetchEvent} event={event} ></EventItem>
        </div>
        
      </div>
    ))

    return (
      <div>
        {this.renderModal()}
       <div className="index-header-container">
            <div className="index-header">
              <div className="blue"></div>
              <div className="black"></div>
              <div className="orange"></div>
              <div className="grey"></div>
              <button onClick={e => this.functionforscroll(e, 'categories-list')}><h3>Browse Events</h3><i class="fas fa-arrow-right fa-2x"></i></button>
          </div>
        </div>
        <h1 className="events-title">
          Browse by Category
        </h1>
        <ul id="categories-list" className="categories-list">{categories}</ul>
      <div className="event-index-container">
  
        <ul className="event-index">
          {eventItems}
        </ul>

        {/* {this.renderCreateButton()} */}
      </div>

      </div>
    );
  }
}

export default EventsIndex;