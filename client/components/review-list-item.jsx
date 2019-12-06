import React from 'react';

class ReviewListItem extends React.Component {

  render() {
    return (

      <div className="reviewListItem card d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div>{this.props.userName}</div>
          <div>{this.props.rating}</div>
        </div>
        <div>{this.props.reviewDescription}</div>
      </div>
    );
  }
}
export default ReviewListItem;
