import React from 'react';
function EventDetails(props) {
  return (
    <div className="eventDetails d-flex flex-column">
      <div className="eventInfo d-flex flex-column overflow-hidden p-2">
        <div className="d-flex justify-content-between font-weight-bold">Soccer Co-Ed
          <i className="far fa-heart fa-2x"></i>
        </div>
        <div className="d-flex justify-content-between">
          <div>Distance:</div>
          <div>.3 miles away</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Type:</div>
          <div>Open Pick Up</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Rating:</div>
          <div></div>
        </div>
      </div>
      <div className="details">Details</div>
      <div className="reviews">Reviews</div>
    </div>
  );

}
export default EventDetails;
