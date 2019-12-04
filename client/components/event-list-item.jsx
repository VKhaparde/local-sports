import React from 'react';

function EventListItem(props) {
  return (
    <div className="eventListCard rounded m-2"
      onClick={() => props.callback(props.id)}>
      <div className="eventListItem ml-2 d-flex flex-column">
        <div className="eventTitle h3 m-0">{props.name}</div>
        <div className="d-flex justify-content-end mr-2 pt-1">5 Star</div>
        <div className="mt-1">
          <div className="h4 m-0">{props.date}</div>
          <div className="">{props.locationName}</div>
        </div>
      </div>
    </div>

  );
}

export default EventListItem;
