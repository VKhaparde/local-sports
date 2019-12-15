import React from 'react';

function FavoritesDisplay(props) {
  if (props.props === 'futbol') {
    return (
      <button className="favorites-icons m-1">
        <i className={`fas fa-${props.props} fa-3x m-1`}
          onClick={() => props.callback('Soccer')} />
      </button>
    );
  } else {
    return (
      <button className="favorites-icons m-1">
        <i className={`fas fa-${props.props}-ball fa-3x m-1`}
          onClick={() => props.callback(props.props)} />
      </button>
    );
  }
}

export default FavoritesDisplay;
