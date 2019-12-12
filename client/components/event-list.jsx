import React from 'react';
import EventListItem from './event-list-item';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.events.events.length === 0) {
      return (
        <div className="eventList mt-5 d-flex flex-column h-25">
          <h1 className="liked-event-title headers-font-ubuntu m-3 mt-4 text-center">
            <i>Please return
              <br></br>
              to the map
              <br></br>
              and select
              <br></br>
              a sport!</i>
          </h1>
        </div>
      );
    } else {
      if (this.props.events.events[0]) {
        var sportType = this.props.events.events[0]['sport-type'];
        return (
          <div className="eventList d-flex flex-column mt-4">
            <h2 className="eventListTitle mb-3 mt-4 headers-font-ubuntu">{sportType}</h2>
            <div className="likedEvents text-capitalize">
              {
                this.props.events.events.map((currentVal, index) => {
                  return (
                    <EventListItem
                      key={currentVal.id}
                      date={currentVal['event-day']}
                      name={currentVal['event-name']}
                      time={currentVal.time}
                      locationName={currentVal.name}
                      rating={currentVal['review-average']}
                      id={currentVal.id}
                      callback={id => this.props.onClick(id)} />
                  );
                })
              }
            </div>
          </div>
        );
      }
    }
  }
}

export default EventList;
