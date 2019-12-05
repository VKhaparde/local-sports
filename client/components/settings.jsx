import React from 'react';

function Settings(props) {
  return (
    <div className="eventList mt-3 container">
      <div className="settingsContainer rounded m-2 ">
        <div className="eventListTitle text-center m-2 sticky-top">
          <h2>Schedule</h2>
        </div>
        <div className="d-flex flex-column ml-4 mt-4">
          <h4 className="liked-event-border text-center p-1">Monday</h4>
          <h4 className="liked-event-border text-center p-1">Tuesday</h4>
          <h4 className="liked-event-border text-center p-1">Wednesday</h4>
          <h4 className="liked-event-border text-center p-1">Thursday</h4>
          <h4 className="liked-event-border text-center p-1">Friday</h4>
          <h4 className="liked-event-border text-center p-1">Saturday</h4>
          <h4 className="liked-event-border text-center p-1">Sunday</h4>
        </div>
        <div className="d-flex justify-content-end">
          <i className="fas fa-arrow-left fa-3x mt-4 mr-2" />
        </div>
      </div>
    </div>
  );
}

export default Settings;
