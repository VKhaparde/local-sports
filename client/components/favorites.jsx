import React from 'react';
import FavoritesDisplay from './favorites-display';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'hidden',
      favorites: ['basketball', 'soccer', 'football']
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleShow() {
    this.setState({
      view: 'show'
    });
  }

  toggleHidden() {
    this.setState({
      view: 'hidden'
    });
  }

  render() {
    if (this.state.view === 'hidden') {
      return (
        <div className="favorites-hidden drop-up"
          onClick={() => this.toggleShow()}>
          <i className="fas fa-chevron-up fa-2x m-2"></i>
        </div>
      );
    }

    if (this.state.view === 'show') {
      return (
        <div className="favorites-show rounded col-3 p-2">
          <div className='row text-center'>
            <div className="justify-content-center">
              <i className="fas fa-chevron-down fa-2x m-2"
                onClick={() => this.toggleHidden()}></i>
              {this.state.favorites.map(sport =>
                <FavoritesDisplay
                  key={sport}
                  props={sport} />
              )}
              <button className="favorites-icons m-1">
                <i className="fas fa-list fa-2x m-2"/>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Favorites;
