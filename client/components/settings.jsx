import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: true,
      Sunday: true
    };
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick(day) {
    this.setState({
      [day]: !this.state[day]
    });

    if (this.props.schedule.includes(day)) {
      setTimeout(() => { this.props.removeFromSchedule(day); }, 300);
    } else {
      setTimeout(() => { this.props.addToSchedule(day); }, 300);
    }
  }

  render() {

    return (
      <div className="eventList mt-3 container">
        <div className="settingsContainer rounded m-2 ">
          <div className="settingsTitle text-center m-2 sticky-top">
            <h2>Schedule</h2>
          </div>
          <div className="d-flex flex-column ml-1 mt-4">
            {this.state.schedule.map((day, index) => {
              return (
                <h4 className={this.state[day] ? 'not-active-day text-center p-1' : 'liked-event-border text-center p-1'}
                  key={index}
                  onClick={() => this.handleEventClick(day)}>{day}</h4>
              );
            })}
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
