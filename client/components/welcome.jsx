import React from 'react';

function Welcome() {
  return (
    <div className="eventList mt-5 d-flex flex-column text-center">
      <div className="eventListTitle text-center m-2 ml-5 mb-4">
        <h2>Welcome</h2>
      </div>
      <div className="liked-event-location text-wrap block-text-font-oswald text-center">
        Local Sports helps you find the perfect pick-up sporting event.<br></br>
        Filter by your sport of choice, day of choice, and location of choice, then get out there and play!<br></br>
        We recommend creating an account to gain access to more feautures; otherwise, <u>sign</u> in or select <u>skip</u> and get on your way.
      </div>

    </div>
  );
}

export default Welcome;
