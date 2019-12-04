import React from 'react';

function LikedEvent(props) {
  return (
    <div className="liked-event-border text-wrap mx-auto">
      <div className="liked-event-title headers-font-ubuntu">{props.title}
        <div className="float-right">
          <button className="d-none" onClick="likeEventClick()">
            <i className="liked-event-heart float-right far fa-heart fa-1x"></i>
          </button>
          <button onClick="likeEventClick()">
            <i className="liked-event-heart float-right fas fa-heart fa-1x"></i>
          </button>
        </div>
      </div>
      <div className="liked-event-location block-text-font-oswald">{props.location}</div>
    </div>
  );
}

export default LikedEvent;
