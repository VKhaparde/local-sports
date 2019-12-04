import React from 'react';

class EventListItem extends React.Component {
  render() {
    return (
      <div className="card border border-success m-1 p-1">
        <h5 className="card-title">{this.props.eventName}</h5>
        <p className="card-text">{this.props.eventName}</p>
        <p className="card-text">Tuesday</p>
      </div>
    );
  }

}

export default EventListItem;
