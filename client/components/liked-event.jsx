import React from 'react';

class LikedEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: true
    };
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick() {
    // this.state = {favorited: true|false}
    this.setState(({ favorited }) => {
      return { favorited: !favorited };
    });
  }

  render() {
    // const favorited = this.state.favorited; same as line 20
    const { favorited } = this.state;
    return (
      <div className="liked-event-border w-80 p-2 m-3 h-20">
        <div className="d-flex justify-content-between">
          <div className="liked-event-title text-wrap headers-font-ubuntu">{this.props.title}</div>
          <button id={favorited ? 'liked-event-heart' : 'unliked-heart-event'} onClick={this.handleEventClick}>
            <i className={`liked-event-heart ${favorited ? 'fas' : 'far'} fa-heart fa-2x`}></i>
          </button>
        </div>
        <div className="liked-event-location text-wrap block-text-font-oswald">{this.props.location}</div>
      </div>
    );
  }
}

export default LikedEvent;
