import React from 'react';

function Welcome() {
  return (
    <div className="eventList mt-3 mb-2 flex-column text-center overflow-none">
      <div className="eventListTitle m-5 headers-font-ubuntu">
        <h2>Welcome</h2>
      </div>
      <div className="liked-event-location text-wrap block-text-font-oswald text-center m-4"><h4>
        Local Sports helps you select the perfect pick-up sporting event.
        <br></br>
        <br></br>
        Filter by your sport of choice, day of choice, and location of choice, then go out and play!
      </h4>
      </div>
      <div className='button m-5 headers-font-ubuntu'>
        <button className='btn btn-primary block submit-button'>Sign In</button>
        <button className='btn btn-primary block submit-button mt-4'>Create an Account</button>
        <button className='btn btn-primary block mt-4 skip-button'>Skip
          <i className="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
