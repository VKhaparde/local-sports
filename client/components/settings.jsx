import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: true
    };
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick(day) {
    this.setState(({ favorited }) => {
      return { favorited: !favorited };
    });
    setTimeout(() => { this.props.updateSchedule(day); }, 300);
  }

  render() {
    return (
      <div className="eventList mt-3 container">
        <div className="settingsContainer rounded m-2 ">
          <div className="settingsTitle text-center m-2 sticky-top">
            <h2>Schedule</h2>
          </div>
          <div className="d-flex flex-column ml-4 mt-4">
            <h4 className="liked-event-border text-center p-1"
              onClick={() => this.handleEventClick('Monday')}>Monday</h4>
            <h4 className="liked-event-border text-center p-1"
              onClick={() => this.handleEventClick('Tuesday')}>Tuesday</h4>
            <h4 className="liked-event-border text-center p-1"
              onClick={() => this.handleEventClick('Wednesday')}>Wednesday</h4>
            <h4 className="liked-event-border text-center p-1"
              onClick={() => this.handleEventClick('Thursday')}>Thursday</h4>
            <h4 className="liked-event-border text-center p-1"
              onClick={() => this.handleEventClick('Friday')}>Friday</h4>
            <h4 className="liked-event-border text-center p-1"
              onClick={() => this.handleEventClick('Saturday')}>Saturday</h4>
            <h4 className="liked-event-border text-center p-1"
              onClick={() => this.handleEventClick('Sunday')}>Sunday</h4>
          </div>
          <div className="d-flex justify-content-end">
            <button> Sign out
              <i className="fas fa-arrow-left fa-3x mt-4 mr-2" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
