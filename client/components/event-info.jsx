import React from 'react';

class EventInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false
    };
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick() {
    this.setState(({ favorited }) => {
      return { favorited: !favorited };
    });

  }

  render() {
    const { favorited } = this.state;

    return (
      <div className="eventInfo d-flex flex-column overflow-hidden p-2">
        <div className="d-flex justify-content-between text-capitalize headers-font-ubuntu h3 m-1 ml-2">{this.props.info.events[0]['event-name']}
          <button id={favorited ? 'liked-event-heart' : 'unliked-heart-event'}
            onClick={() => this.handleEventClick()}>
            <i className={`liked-event-heart ${favorited ? 'fas' : 'far'} fa-heart`}></i>
          </button>
        </div>
        <div className="d-flex justify-content-between ml-2 mt-1 block-text-font-oswald">
          <div>{this.props.info.events[0]['event-day']}</div>
        </div>
        <div className="d-flex justify-content-between ml-2 mt-1 block-text-font-oswald">
          <div>{this.props.info.events[0].name}</div>
          <div className='rating mr-3' style={{ backgroundImage: `url(${this.props.ratingImage})` }}></div>
          {/* <button className="backButton"
            onClick={() => this.props.toggleView()}>
            <i className="fas fa-arrow-left fa-1.5x"></i>
          </button> */}
        </div>
      </div>
    );
  }
}
export default EventInfo;
