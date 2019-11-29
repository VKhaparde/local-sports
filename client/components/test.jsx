import React from 'react';

function TestFavoritesDisplay() {

  return (
    <div className=" dropup">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown"/>
      <ul className="dropdown-menu">
        <li className='fas fa-basketball-ball'></li>
        <li className='fas fa-futbol'></li>
      </ul>
    </div>
  );
}

export default TestFavoritesDisplay;
