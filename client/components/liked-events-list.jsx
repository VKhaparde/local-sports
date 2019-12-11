import React from 'react';
import LikedEvent from './liked-event';
import GoogleMap from './google-map';
import { Link } from 'react-router-dom';
import EventDetails from './event-details';

class LikedEventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLikedEventClicked: false,
      eventInfo: [],
      eventInfoDisplay: false
    };
    this.searchLikedEvent = this.searchLikedEvent.bind(this);
  }

  searchLikedEvent(id) {
    fetch(`/api/event-search?id=${id}`)
      .then(response => response.json())
      .then(data => this.setState({
        eventInfo: data,
        eventInfoDisplay: true
      }))
      .catch(error => console.error('Error', error));
  }

  toggleDetailView() {
    this.setState({
      eventInfoDisplay: !this.state.eventInfoDisplay
    });
  }

  render() {

    if (this.props.likedEvents.length === 0) {
      return (
        <div>
          <GoogleMap />
          <div className="eventList mt-3 d-flex flex-column m-3">
            <h1 className="eventListTitle headers-font-ubuntu mb-3">Liked Events</h1>
            <div className="likedEvents">
              <h4 className='text-center mt-3 block-text-font-oswald p-2'>Your list is empty!<br></br>Return to the map to<br></br>See events around you.</h4>
            </div >
            <Link to='/search'>
              <div className="text-center">
                <button className="backButton">
                  <i className="fas fa-arrow-left fa-3x"></i>
                </button>
              </div>
            </Link>
          </div>
        </div>
      );
    } else if (this.props.likedEvents.length !== 0 && this.state.eventInfoDisplay) {
      return (
        <EventDetails events={this.state.eventInfo}
          toggleView={() => this.toggleDetailView()}
        />
      );

    }

    return (
      <div>
        <div className="eventList d-flex flex-column mt-3">
          <div className="eventListTitle mb-3 headers-font-ubuntu">Liked Events</div>
          <div className="text-capitalize">
            {
              this.props.likedEvents['liked-events'].map((event, index) => {
                // const eventId = event['event-id'];
                return (
                  <LikedEvent
                    key={index}
                    event={event}
                    removeEvent={id => this.props.removeLike(id)}
                    // eventDetail={id => this.props.searchLike(id)}
                    eventDetail={id => this.searchLikedEvent(id)}
                  />
                );
              })
            }
          </div >
        </div>
      </div>
    );
  }
}

export default LikedEventsList;
