import React from 'react';
import LikedEvent from './liked-event';
import { Link } from 'react-router-dom';

class LikedEventsList extends React.Component {

  render() {
    if (this.props.likedEvents.length === 0) {
      return (
        <div>
          <div className="eventList mt-3 d-flex flex-column m-3">
            <h1 className="eventListTitle headers-font-ubuntu mb-3">Liked Events</h1>
            <div className="likedEvents">
              <h4 className='text-center mt-3 block-text-font-oswald p-2'>Your list is empty!<br></br>Return to the map to<br></br>see events around you.</h4>
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
    }
    return (
      <div>
        <div className="eventList d-flex flex-column mt-3">
          <div className="eventListTitle mb-3 headers-font-ubuntu">Liked Events</div>
          <div className="text-capitalize">
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
