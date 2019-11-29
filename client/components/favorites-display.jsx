import React from 'react';

function FavoritesDisplay(props) {

  return (
    <div className="favorites-show rounded col-3 p-2">
      <div className='row text-center'>
        <div className="justify-content-center">
          <button className=" border rounded m-1 ">
            <i className="fas fa-chevron-down fa-2x m-2" />
          </button>
          <button className="favorites-icons m-1 ">
            <i className="fas fa-basketball-ball fa-2x m-2" />
          </button>
          <button className="favorites-icons m-1 ">
            <i className="fas fa-futbol fa-2x m-2" />
          </button>
          <button className="favorites-icons m-1 ">
            <i className="fas fa-football-ball fa-2x m-2" />
          </button>
          <button className="favorites-icons m-1 ">
            <i className="fas fa-list fa-2x m-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoritesDisplay;
