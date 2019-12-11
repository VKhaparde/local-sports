import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="eventList mt-1 d-flex flex-column text-center">
      <div className="eventListTitle m-2 ml-5 mb-3">
        <h2>Welcome</h2>
      </div>
      <div className="liked-event-location text-wrap block-text-font-oswald text-center m-2"><h4>
        Local Sports helps you select the perfect pick-up sporting event.
        <br></br>
        <br></br>
        Filter by your sport of choice, day of choice, and location of choice, then go out and play!
      </h4>
      </div>
      <div className='button mt-2 headers-font-ubuntu'>
        <Link to='/signIn' >
          <button className='btn btn-primary block submit-button'>Sign In</button>
        </Link>
        <Link to= '/createAccount' >
          <button className='btn btn-primary block submit-button mt-3'>Create an Account</button>
        </Link>
        <Link to= '/search' >
          <button className='btn btn-primary block mt-2 skip-button'>Skip
            <i className="fas fa-chevron-right ml-2"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
