import React from 'react';
import GoogleMaps from './google-maps';
import Favorites from './favorites';
import SearchTab from './search-tab';
import EventDetails from './event-details';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.sportSearch();
  }

  sportSearch() {
    // const req = {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(search)
    // };

    fetch('/api/search')
      .then(response => response.json())
      .then(data => this.setState({
        events: data
      }))
      .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <div className="main">
        <SearchTab />
        <GoogleMaps events={this.state}/>
        <EventDetails />
        <Favorites events={this.state} />
      </div>
    );

  }
}

export default Search;
