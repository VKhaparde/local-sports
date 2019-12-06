import React from 'react';

function Settings(props) {
  return (
    <div className="eventList mt-3 container">
      <div className="eventListTitle text-center m-2 ml-5 mb-4">
        <h2>Schedule</h2>
      </div>
      <div className="d-flex flex-column ml-4 mr-3">
        <h4 className="liked-event-border text-center p-1 pb-2">Monday</h4>
        <h4 className="liked-event-border text-center p-1 pb-2">Tuesday</h4>
        <h4 className="liked-event-border text-center p-1 pb-2">Wednesday</h4>
        <h4 className="liked-event-border text-center p-1 pb-2">Thursday</h4>
        <h4 className="liked-event-border text-center p-1 pb-2">Friday</h4>
        <h4 className="liked-event-border text-center p-1 pb-2">Saturday</h4>
        <h4 className="liked-event-border text-center p-1 pb-2">Sunday</h4>
      </div>
      <div className="d-flex justify-content-center mt-3 mr-3">
        <i className="fas fa-chevron-left mt-1 mr-2" />Back
      </div>
    </div>
  );
}

export default Settings;
