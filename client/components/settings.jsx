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
      <div className="eventList mt-3 flex-column text-center overflow-none">
        <div className="eventListTitle mt-4 mb-4 headers-font-ubuntu">
          <h2>Schedule</h2>
        </div>
        <div className="d-flex flex-column ml-5 mr-5 mb-3">
          {this.state.schedule.map((day, index) => {
            return (
              <h4 className={`${this.state[day] ? 'not-active-day' : 'liked-event-border'} text-center p-1 block-text-font-oswald`}
                key={index}
                onClick={() => this.handleEventClick(day)}>{day}</h4>
            );
          })}
        </div>
        <div className="eventListTitle headers-font-ubuntu">
          Sign Out
        </div>
        <button className="mt-3">
          <i className="fas fa-sign-out-alt fa-2x" />
        </button>
      </div>
    );
  }
}

export default Settings;
