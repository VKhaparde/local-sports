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

  componentDidUpdate() {

  }

  handleSpecificReviewClick(selectedReviewId) {
    const selectedReview = this.state.reviews.filter(currentVal => currentVal.id === selectedReviewId);
    this.setState({
      isSpecificReviewClicked: !this.state.isSpecificReviewClicked,
      reviews: selectedReview
    });
  }

  render() {
    if (this.props.isReviewsClicked) {
      return (
        <div className="reviews font-text-bold" onClick={this.props.onReviewsClick}>
          Reviews
          <div className="reviewList m-2 p-2">
            {
              this.state.reviews.map((currentVal, index) => {
                return (
                  <ReviewListItem
                    key={currentVal.id}
                    id={currentVal.id}
                    userName={currentVal.username}
                    rating={currentVal['review-rating']}
                    reviewDescription={currentVal['review-description']}
                    onSpecificReviewClick={this.handleSpecificReviewClick} />);
              })
            }
          </div>
        </div>
      );
    } else if (!this.props.isReviewsClicked) {
      return (
        <div className="reviews" onClick={this.props.onReviewsClick}>Reviews
        </div>
      );
    } else if (this.props.isReviewsClicked && this.state.isSpecificReviewClicked) {
      return (
        <div className="reviews font-text-bold" onClick={this.props.onReviewsClick}>
          Reviews
          <div className="reviewList m-2 p-2">
            {
              this.state.reviews.map((currentVal, index) => {
                return (
                  <ReviewListItem
                    key={currentVal.id}
                    id={currentVal.id}
                    userName={currentVal.username}
                    rating={currentVal['review-rating']}
                    reviewDescription={currentVal['review-description']}
                    onSpecificReviewClick={this.handleSpecificReviewClick} />);
              })
            }
          </div>
        </div>
      );
    }
  }
}

export default ReviewsList;
