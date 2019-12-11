import React from 'react';
import LikedEvent from './liked-event';
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
          <div className="eventList mt-3 flex-column text-center h-50">
            <div className="eventListTitle mt-4 mb-4 headers-font-ubuntu">
              <h2>Liked Events</h2>
            </div>
            <div className="likedEvents">

              <h4 className='text-center mt-4 block-text-font-oswald p-2'>
                <h3><i>
                  Your list is empty!
                </i></h3>
                <br></br>
                Return to the map to
                <br></br>
                see events around you.
              </h4>
            </div >
            <Link to='/search'>
              <div className="text-center mt-5">
                <button className="backButton submit-button w-25 block-text-font-oswald text-white">
                  <i className="fas fa-chevron-left mr-2"></i>
                  Back
                </button>
              </div>
            </Link>
          </div>
        </div>
      );
    }

    if (this.state.eventInfoDisplay) {
      return (
        <div>
          <EventDetails events={this.state.eventInfo}
            toggleView={() => this.toggleDetailView()} />
        </div>
      );
    }

    return (
      <div>
        <div className="eventList mt-3 flex-column text-center">
          <div className="eventListTitle mt-4 mb-4 headers-font-ubuntu">
            <h2>Liked Events</h2>
          </div>
          <div className="text-capitalize d-flex flex-column ml-5 mr-5 mb-3">
            {
              this.props.likedEvents.map((event, index) => {

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
