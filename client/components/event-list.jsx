import React from 'react';
import EventListItem from './event-list-item';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListIconClicked: false
    };
  }

  render() {
    if (this.props.events[0]) {
      var sportType = this.props.events[0]['sport-type'];
    }
    return (
      <div>
        <div className="eventList m-2 p-2 d-flex flex-column">
          <div>
            <i className="far fa-heart fa-7x"></i>
          </div>
          <h3 className="text-center">{sportType}</h3>
          <div className="d-flex flex-column overflow-hidden m-2 p-0">
            {
              this.props.events.map((currentVal, index) => {
                return (
                  <EventListItem className="d-flex "
                    key={index}
                    eventName={currentVal.name}
                    eventLocation={currentVal.name}
                  // eventTime={currentVal['event-day']}
                  />
                );
              })
            }
          </div>
        </div>
        <div className="float-right m-4"><i className="fas fa-map-marker-alt"></i></div>
      </div>
    );
  }
}

export default EventList;
