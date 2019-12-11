import React from 'react';

class LikedEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: true
    };
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick(event) {
    this.setState(({ favorited }) => {
      return { favorited: !favorited };
    });
    setTimeout(() => { this.props.removeEvent(event); }, 300);
  }

  render() {
    const { favorited } = this.state;

    return (
      <div className="liked-event-border p-2 m-2"
        onClick={() => this.props.eventDetail(this.props.event['event-id'])}>
        <div className="d-flex justify-content-between">
          <div className="liked-event-title text-wrap headers-font-ubuntu">
            <h5>{this.props.event['event-name']}</h5>
          </div>
          <button id={favorited ? 'liked-event-heart' : 'unliked-heart-event'}
            onClick={() => this.handleEventClick(this.props.event)}>
            <i className={`liked-event-heart ${favorited ? 'fas' : 'far'} fa-heart fa-2x`}></i>
          </button>
        </div>
        <div className="liked-event-location text-wrap block-text-font-oswald">
          <h6>{this.props.event['event-day']}</h6>
        </div>
      </div>
    );
  }
}

export default LikedEvent;
