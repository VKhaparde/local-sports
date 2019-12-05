import React from 'react';

class LikedEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.likeEventClick = this.bind.likeEventClick;
  }

  LikedEvent(props) {
    return (
      <div className="liked-event-border p-2 m-2">
        <div className="d-flex justify-content-between">
          <div className="liked-event-title text-wrap headers-font-ubuntu">{props.title}</div>
          <div className="liked-event-heart-div">
            <button className="d-none" onClick="LikeEventClick">
              <i className="liked-event-heart far fa-heart fa-2x"></i>
            </button>
            <button onClick="LikeEventClick">
              <i className="liked-event-heart fas fa-heart fa-2x"></i>
            </button>
          </div>
        </div>
        <div className="liked-event-location text-wrap block-text-font-oswald">{props.location}</div>
      </div>
    );
  }

  LikeEventClick() {

  }

}

export default LikedEvent;
