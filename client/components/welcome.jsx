import React from 'react';

function Welcome() {
  return (
    <div className="eventList mt-5 d-flex flex-column text-center">
      <div className="eventListTitle m-2 ml-5 mb-3">
        <h2>Welcome</h2>
      </div>
      <div className="liked-event-location text-wrap block-text-font-oswald text-center m-3"><h4>
        Local Sports helps you select the perfect pick-up sporting event.
        <br></br>
        <br></br>
        Filter by your sport of choice, day of choice, and location of choice, then go out and play!
      </h4>
      </div>
      <div className='button mt-3 headers-font-ubuntu'>
        <button className='btn btn-primary block submit-button'>Sign In</button>
        <button className='btn btn-primary block submit-button mt-4'>Create an Account</button>
        <button className='btn btn-primary block mt-3 skip-button'>Skip
          <i className="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
