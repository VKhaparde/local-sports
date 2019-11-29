import React from 'react';
import FavoritesDisplay from './favorites-display';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'hidden',
      favorites: [
        { sport: 'soccer', image: 'fas fa-futbol' },
        { sport: 'basketball', image: 'fas fa-basketball-ball' }
      ]
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
        <div className="favorites-show">
          <div className='row'>
            <div className="col">
              <i className="fas fa-chevron-down fa-2x m-2"
                onClick={() => this.toggleHidden()}></i>
              {this.state.favorites.map(sport =>
                <FavoritesDisplay
                  key={sport.sport}
                  props={sport} />
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Favorites;
