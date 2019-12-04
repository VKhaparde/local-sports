import React from 'react';

function EventListItem(props) {
  return (

    <div className="eventListItem rounded m-2">
      <div className="ml-2">
        <h4 className="title">{props.name}</h4>
        <div className="">{props.date}</div>
        <div className="d-flex">
          <p className="">{props.locationName}</p>
        </div>
      </div>
    </div>

  );
}

export default EventListItem;
