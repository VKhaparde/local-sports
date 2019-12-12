import React from 'react';

class ReviewListItem extends React.Component {
  render() {
    // const handleClick = event => {
    //   event.stopPropagation();
    //   this.props.onSpecificReviewClick(this.props.id);
    // };
    return (
      <div className="reviewListItem mb-2 p-2 d-flex flex-column"
        // onClick={handleClick}
      >
        <div className="d-flex justify-content-between mt-2 pl-2 pr-2">
          <div className="">{this.props.userName}</div>
          <div className="rating" style={{ backgroundImage: `url(${this.props.ratingImage})` }}></div>
        </div>
        <div className="d-flex justify-content-between m-2">
          <i>{this.props.reviewDescription}</i>
        </div>
        {/* <div className=""><i>{this.props.reviewDescription}</i></div> */}
      </div>
    );
  }
}
export default ReviewListItem;
