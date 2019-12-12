import React from 'react';
import ReviewListItem from './review-list-item';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      isSpecificReviewClicked: false,
      reviewId: null
    };
    this.handleSpecificReviewClick = this.handleSpecificReviewClick.bind(this);
  }

  componentDidMount() {
    this.reviewSearch(this.props.eventId);
  }

  reviewSearch(id) {
    fetch(`/api/review-search?id=${id}`)
      .then(response => response.json())
      .then(data => this.setState({
        reviews: data
      }))
      .catch(error => console.error('Fetch failed error', error));
  }

  handleSpecificReviewClick(selectedReviewId) {
    const selectedReview = this.state.reviews.filter(currentVal => currentVal.id === selectedReviewId);
    this.setState({
      isSpecificReviewClicked: !this.state.isSpecificReviewClicked,
      reviews: selectedReview
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
    if (this.props.isReviewsClicked) {
      return (
        <div className="reviews headers-font-ubuntu" onClick={this.props.onReviewsClick}>
          <h4><u>Reviews</u></h4>
          <div className="reviewList m-2 p-2 block-text-font-oswald ml-2">
            {
              this.state.reviews.map((currentVal, index) => {
                return (
                  <ReviewListItem
                    key={currentVal.id}
                    id={currentVal.id}
                    userName={currentVal.username}
                    rating={currentVal['review-rating']}
                    reviewDescription={currentVal['review-description']}
                    onSpecificReviewClick={this.handleSpecificReviewClick}
                    ratingImage={this.displayRating(currentVal['review-rating'])} />);
              })
            }
          </div>
        </div>
      );
    } else if (!this.props.isReviewsClicked) {
      return (
        <div className="reviews headers-font-ubuntu" onClick={this.props.onReviewsClick}>
          Reviews
        </div>
      );
    } else if (this.props.isReviewsClicked && this.state.isSpecificReviewClicked) {
      return (
        <div className="reviews headers-font-ubuntu" onClick={this.props.onReviewsClick}>
          Reviews
          <div className="reviewList m-2 p-2 block-text-font-oswald ml-2">
            {
              this.state.reviews.map((currentVal, index) => {
                return (
                  <ReviewListItem
                    key={currentVal.id}
                    id={currentVal.id}
                    userName={currentVal.username}
                    rating={currentVal['review-rating']}
                    reviewDescription={currentVal['review-description']}
                    onSpecificReviewClick={this.handleSpecificReviewClick}
                    ratingImage={this.displayRating(currentVal['review-rating'])} />);
              })
            }
          </div>
        </div>
      );
    }
  }
}

export default ReviewsList;
