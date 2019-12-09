import React from 'react';

class ReviewListItem extends React.Component {
  render() {
    const handleClick = event => {
      event.stopPropagation();
      this.props.onSpecificReviewClick(this.props.id);
    };
    return (
      <div className="reviewListItem d-flex flex-column"
        onClick={handleClick}>
        <div className="d-flex justify-content-between">
          <div className="">{this.props.userName}</div>
          <div className='rating m-2' style={{ backgroundImage: `url(${this.props.ratingImage})` }}></div>
        </div>
        <div>{this.props.reviewDescription}</div>
      </div>
    );
  }
}
export default ReviewListItem;
