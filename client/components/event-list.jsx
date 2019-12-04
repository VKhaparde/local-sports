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
        <div className="eventList mt-3">
          <h1 className="eventListTitle text-center p-2 sticky-top bg-white">Select a sport!</h1>
          <h2 className="text-center m-2"> No sport selected
          </h2>
        </div>
      );
    } else {

      if (this.props.events.events[0]) {
        var sportType = this.props.events.events[0]['sport-type'];
      }
      return (
        <div className="eventList mt-3">
          <h1 className="eventListTitle shadow-lg text-center pt-4 sticky-top bg-white">{sportType}</h1>
          <div className="d-flex flex-column overflow-hidden m-2">
            {
              this.props.events.events.map((currentVal, index) => {
                return (
                  <EventListItem
                    key={index}
                    date={currentVal['event-day']}
                    name={currentVal['event-name']}
                    locationName={currentVal.name}
                    id = {currentVal.id}
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

export default EventList;
