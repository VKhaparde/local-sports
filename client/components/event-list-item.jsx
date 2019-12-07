import React from 'react';

function EventListItem(props) {
  return (
    <div className="liked-event-border p-2 m-2"
      onClick={() => props.callback(props.id)}>
      <div className="d-flex justify-content-between">
        <div className="liked-event-title text-wrap headers-font-ubuntu">{props.name}</div>
        <button>
          <i className="liked-event-heart far fa-heart fa-2x"></i>
        </button>
      </div>
      <div className="liked-event-location text-wrap block-text-font-oswald">
        5 Star<br></br>
        {props.date}<br></br>
        {props.locationName}
      </div>
    </div>
  );
}

export default EventListItem;
