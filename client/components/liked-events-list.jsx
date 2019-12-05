import React from 'react';
import LikedEvent from './liked-event';

const eventInfo = [
  { id: 1, title: 'Soccer Co-Ed', location: 'Irvine Great Park', rating: 5, distance: 0.3 },
  { id: 2, title: 'Basketball 5-on-5', location: 'Los Olivos Community Park', rating: 8, distance: 1.3 },
  { id: 3, title: 'Baseball Intermediate', location: 'Sweet Shade Park', rating: 7, distance: 0.3 },
  { id: 4, title: 'Basketball Intermediate', location: 'Los Olivos Community Park', rating: 7, distance: 0.3 }
];

class LikedEventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  // fetch event data
  // }

  render() {
    return (
      <div>
        <div className="eventList d-flex flex-column m-3">
          <div className="section-title headers-font-ubuntu">Liked Events</div>
          <div className="LikedEvents">
            {
              eventInfo.map(event => {
                return (
                  <LikedEvent
                    key={event.id}
                    title={event.title}
                    // rating={event.rating}
                    // distance={event.distance}
                    location={event.location} />
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
