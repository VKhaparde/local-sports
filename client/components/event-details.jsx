import React from 'react';
import ReviewList from './reviews-list';
import EventInfo from './event-info';

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailsClicked: false,
      isReviewsClicked: false
    };

    this.handleClickDetails = this.handleClickDetails.bind(this);
    this.handleClickReviews = this.handleClickReviews.bind(this);
    this.displayRating = this.displayRating.bind(this);
  }

  handleClickDetails(event) {
    this.setState({
      isDetailsClicked: !this.state.isDetailsClicked,
      isReviewsClicked: false
    });
  }

  handleClickReviews(event) {
    this.setState({
      isReviewsClicked: !this.state.isReviewsClicked,
      isDetailsClicked: false
    });
  }

  displayRating(ratingNum) {
    const rating = parseFloat(ratingNum);
    let backgroundImageUrl;
    switch (rating) {
      case 5:
        backgroundImageUrl = 'images/5stars.png';
        break;
      case 4.5:
        backgroundImageUrl = 'images/4.5stars.png';
        break;
      case 4:
        backgroundImageUrl = 'images/4stars.png';
        break;
      case 3.5:
        backgroundImageUrl = 'images/3.5stars.png';
        break;
      case 3:
        backgroundImageUrl = 'images/3stars.png';
        break;
    }
    return backgroundImageUrl;
  }

  render() {
    var rating = this.props.events[0]['review-average'];
    if (this.state.isDetailsClicked) {
      return (
        <div className="eventDetails d-flex flex-column m-2">
          <EventInfo
            info={this.props}
            toggleView={() => this.props.toggleView()}
            ratingImage={this.displayRating(rating)} />
          <div className="details headers-font-ubuntu"
            onClick={this.handleClickDetails}>
            <h4><u>Details</u></h4>
            <div className="detailsInfo block-text-font-oswald ml-2 mr-2">
              <div className="d-flex justify-content-between">
                <div>Organizer:</div>
                <div>{this.props.events[0]['organizer-name']}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Email:</div>
                <div>{this.props.events[0].email}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Phone:</div>
                <div>{this.props.events[0].phone}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Time</div>
                <div>{this.props.events[0].time}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Address:</div>
                <div>{this.props.events[0].address}</div>
              </div>
              <div className="d-flex justify-content-between mt-3 h4">
                <p className="font-italic p-0">{this.props.events[0]['event-description']}</p>
              </div>
            </div>
          </div>
          <ReviewList
            onReviewsClick={this.handleClickReviews}
            eventId={this.props.events[0]['event-id']}
            isReviewsClicked={this.state.isReviewsClicked}/>
        </div >
      );
    } else if (this.state.isReviewsClicked) {
      return (
        <div className="eventDetails d-flex flex-column m-2">
          <EventInfo
            info={this.props}
            toggleView={() => this.props.toggleView()}
            ratingImage={this.displayRating(rating)} />
          <div className="details headers-font-ubuntu"
            onClick={this.handleClickDetails}>
            Details
          </div>
          <ReviewList
            onReviewsClick={this.handleClickReviews}
            eventId={this.props.events[0]['event-id']}
            isReviewsClicked={this.state.isReviewsClicked}/>
        </div >
      );
    } else {
      return (
        <div className="eventDetails d-flex flex-column m-2">
          <EventInfo
            info={this.props}
            toggleView={() => this.props.toggleView()}
            ratingImage={this.displayRating(rating)} />
          <div className="details headers-font-ubuntu"
            onClick={this.handleClickDetails}>
            Details
          </div>
          <ReviewList
            onReviewsClick={this.handleClickReviews}
            eventId={this.props.events[0]['event-id']}
            isReviewsClicked={this.state.isReviewsClicked}/>
        </div >
      );
    }
  }
}

export default EventDetails;
