import React from 'react';
import LikedEvent from './liked-event';
import { Link } from 'react-router-dom';

class LikedEventsList extends React.Component {

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
                    removeEvent={id => this.props.removeLiked(id)}
                    eventDetail={id => this.props.searchLike(id)} />
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
