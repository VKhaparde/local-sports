import React from 'react';
import LikedEvent from './liked-event';

class LikedEventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    if (this.props.likedEvents.length === 0) {
      return (
        <div>
          <div className="eventList d-flex flex-column m-3">
            <div className="section-title headers-font-ubuntu">Liked Events</div>
            <div className="likedEvents">
              <div className='h3 text-center mt-3'> You do not have any liked events</div>
            </div >
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="eventList d-flex flex-column m-3">
          <div className="section-title headers-font-ubuntu">Liked Events</div>
          <div className="likedEvents">
            {
              this.props.likedEvents.map(event => {
                return (
                  <LikedEvent
                    key={event.id}
                    title={event.title}
                    id={event.id}
                    rating={event.rating}
                    location={event.location}
                    removeEvent={id => this.props.removeLike(id)}
                    eventDetail={id => this.props.searchLike(id)}/>
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
