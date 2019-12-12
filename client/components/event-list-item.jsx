import React from 'react';

function EventListItem(props) {

  return (
    <div className="liked-event-border p-2 m-2"
      onClick={() => props.callback(props.id)}>
      <div className="d-flex justify-content-between text-capitalize">
        <div className="liked-event-title text-wrap headers-font-ubuntu">{props.name}</div>
        <div className="d-flex justify-content-between">
          {props.date}
        </div>
        {/* <button>
          <i className="liked-event-heart far fa-heart fa-2x"></i>
        </button> */}
      </div>
      <div className="liked-event-location text-wrap block-text-font-oswald mt-4">
        <div className="d-flex justify-content-between">
          {props.locationName}
          <div className='justify-content-end mr-1'>
            {props.time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;
