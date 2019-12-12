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
        <div className="eventList mt-3 d-flex flex-column m-3">
          <h1 className="eventListTitle headers-font-ubuntu mb-3 mt-4">Select a sport!</h1>
          <h2 className="text-center mt-3 block-text-font-oswald p-2"> No sport selected
          </h2>
        </div>
      );
    } else {
      if (this.props.events.events[0]) {
        var sportType = this.props.events.events[0]['sport-type'];
        return (
          <div className="eventList d-flex flex-column mt-3">
            <h1 className="eventListTitle mb-3 mt-4 headers-font-ubuntu">{sportType}</h1>
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
