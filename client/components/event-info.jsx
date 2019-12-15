import React from 'react';

class EventInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false
    };
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  componentDidMount() {
    this.checkLikedEventCondition();
  }

  checkLikedEventCondition() {
    if (this.props.info.likedEvents === undefined) {
      return null;
    }

    const id = this.props.info.events[0]['event-id'];
    this.props.info.likedEvents.filter(event => {
      if (event['event-id'] === id) {
        this.setState({
          favorited: true
        });
      }
    });
  }

  handleEventClick(event) {
    if (this.state.favorited === true) {
      this.props.info.removeLike(event);
    }

    if (this.state.favorited === false) {
      this.props.info.addLike(event);
    }

    this.setState(({ favorited }) => {
      return { favorited: !favorited };
    });

  }

  render() {
    const { favorited } = this.state;
    return (
      <div className="eventInfo d-flex flex-column overflow-hidden p-1 ">
        <div className="d-flex justify-content-between text-capitalize headers-font-ubuntu h3 m-1 ml-2 text-left">{this.props.info.events[0]['event-name']}
          <div className="heart-div-button" id={favorited ? 'liked-event-heart' : 'unliked-heart-event'}
            onClick={() => this.handleEventClick(this.props.info.events[0])}>
            <i className={`liked-event-heart ${favorited ? 'fas' : 'far'} fa-heart`}></i>
          </div>
        </div>
        <div className="d-flex justify-content-between ml-2  block-text-font-oswald">
          <div className="h5">{this.props.info.events[0]['event-day']}</div>
          <div className='rating mr-2 ' style={{ backgroundImage: `url(${this.props.ratingImage})` }}></div>
        </div>
        <div className="d-flex justify-content-between ml-2 block-text-font-oswald">
          <div className="h4">{this.props.info.events[0].name}</div>
          <button
            onClick={() => this.props.toggleView()}>
            <i className="fas fa-arrow-left fa-2x"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default EventInfo;
