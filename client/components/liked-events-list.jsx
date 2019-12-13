import React from 'react';
import LikedEvent from './liked-event';
import { Link } from 'react-router-dom';

class LikedEventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          <div className="eventList mt-3 flex-column text-center">
            <div className="eventListTitle mt-4 mb-4 headers-font-ubuntu">
              <h2>Liked Events</h2>
            </div>
            <div className="likedEvents">

              <h3 className='text-center mt-4 block-text-font-oswald p-2'>
                <h4>
                  <i>Your list is empty!</i>
                </h4>
                <br></br>
                Return to the map to
                <br></br>
                see events around you.
              </h3>
            </div >
            <Link to='/search'>
              <div className="text-center m-4">
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

    return (
      <div>
        <div className="eventList mt-3 flex-column text-center">
          <div className="eventListTitle mt-4 mb-4 headers-font-ubuntu">
            <h2>Liked Events</h2>
          </div>
          <div className="text-capitalize d-flex flex-column mb-3">
            {
              this.props.likedEvents.map(event => {

                return (
                  <LikedEvent
                    key={event['event-id']}
                    event={event}
                    removeEvent={id => this.props.removeLike(id)} />
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
