import React from 'react';

function EventListItem(props) {

  return (
    <div className="liked-event-border p-2 m-2"
      onClick={() => props.callback(props.id)}>
      <div className="d-flex text-capitalize">
        <div className="liked-event-title text-wrap headers-font-ubuntu">
          <h3>{props.name}</h3>
          <div className="d-flex block-text-font-oswald mt-3">
            <h5>
              {props.date} | {props.time}
              <br></br>
              {props.locationName}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;
