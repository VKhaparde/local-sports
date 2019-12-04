import React from 'react';

function LikedEvent(props) {
  return (
    <div>
      <div className="LikedEventTitle">{props.title}</div>
      <div className="LikedEventRating">{props.rating}</div>
      <div className="LikedEventDistance">{props.distance}</div>
    </div>
  );
}

export default LikedEvent;
