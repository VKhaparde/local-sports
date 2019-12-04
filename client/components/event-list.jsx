import React from 'react';
import EventListItem from './event-list-item';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.events.events[0]) {
      var sportType = this.props.events.events[0]['sport-type'];
    }
    return (
      <div>
        <div className="eventList mt-3 container">
          <h1 className="eventListTitle text-center m-2 sticky-top bg-white">{sportType}</h1>
          <div className="d-flex flex-column overflow-hidden m-2">
            {
              this.props.events.events.map((currentVal, index) => {
                return (
                  <EventListItem
                    key={index}
                    date={currentVal['event-day']}
                    name={currentVal['event-name']}
                    locationName={currentVal.name}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default EventList;
