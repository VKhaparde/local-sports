import React from 'react';
import FavoritesDisplay from './favorites-display';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'hidden',
      favorites: ['basketball', 'baseball', 'futbol']
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

    if (this.props.events.view === 'list') {
      return (
        <div className="favorites-hidden">
          <button className="favorites-icons m-1">
            <i className="fas fa-map-marker-alt fa-2x m-2"
              onClick={() => this.props.listCallback()} />
          </button>
        </div>
      );
    }

    if (this.state.view === 'hidden') {
      return (
        <div className="favorites-hidden">
          <div className="drop-up text-center"
            onClick={() => this.toggleShow()}>
            <i className="fas fa-chevron-up fa-2x text-white"></i>
          </div>
          <button className="favorites-icons m-1">
            <i className="fas fa-list fa-2x m-2"
              onClick={() => this.props.listCallback()} />
          </button>
        </div>
      );
    }

    if (this.state.view === 'show') {
      return (
        <div className="favorites-show rounded col-2 mr-3">
          <div className='row text-center'>
            <div className="justify-content-center">
              <i className="fas fa-chevron-down fa-2x text-white"
                onClick={() => this.toggleHidden()}></i>
              {this.state.favorites.map(sport =>
                <FavoritesDisplay
                  callback={sport => this.props.callback(sport)}
                  key={sport}
                  props={sport} />
              )}
              <button className="favorites-icons m-1">
                <i className="fas fa-list fa-2x m-2"
                  onClick={() => this.props.listCallback()}
                />
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Favorites;
