import React from 'react';
import ReviewListItem from './review-list-item';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
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

  render() {
    if (this.props.isReviewsClicked) {
      return (
        <div className="reviews" onClick={this.props.onReviewsClick}>
          Reviews
          {
            this.state.reviews.map((currentVal, index) => {
              return (
                <ReviewListItem
                  key={currentVal.id}
                  id={currentVal.id}
                  userName={currentVal.username}
                  rating={currentVal['review-rating']}
                  reviewDescription={currentVal['review-description']} />);
            })
          }
        </div>
      );
    } else {
      return (
        <div className="reviews" onClick={this.props.onReviewsClick}>Reviews
        </div>
      );
    }
  }
}

export default ReviewsList;
