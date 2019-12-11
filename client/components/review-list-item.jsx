import React from 'react';

class ReviewListItem extends React.Component {
  render() {
    const handleClick = event => {
      event.stopPropagation();
      this.props.onSpecificReviewClick(this.props.id);
    };
    return (
      <div className="reviewListItem mb-2 d-flex flex-column"
        onClick={handleClick}>
        <div className="d-flex justify-content-between mt-2 p-2">
          <div className="pl-2">{this.props.userName}</div>
          <div className="rating mr-2" style={{ backgroundImage: `url(${this.props.ratingImage})` }}></div>
        </div>
        <blockquote className="blockquote">
          <p className="pl-2 mb-0"><i>{this.props.reviewDescription}</i></p>
        </blockquote>
        {/* <div className=""><i>{this.props.reviewDescription}</i></div> */}
      </div>
    );
  }
}
export default ReviewListItem;
