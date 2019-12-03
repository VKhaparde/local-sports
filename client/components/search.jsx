import React from 'react';
import GoogleMap from './google-map';
import Favorites from './favorites';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.sportSearch = this.sportSearch.bind(this);
  }

  componentDidMount() {

  }

  sportSearch(sport) {
    fetch(`/api/sport-search? sport=${sport}`)
      .then(response => response.json())
      .then(data => this.setState({
        events: data
      }))
      .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <div className="main">
        <GoogleMap events={this.state}/>
        {/* <EventDetails /> */}
        <Favorites events={this.state}
          callback={sport => this.sportSearch(sport)} />
      </div>
    );

  }
}

export default Search;
