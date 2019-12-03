import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GoogleMap from './google-map';
import Favorites from './favorites';
import EventDetails from './event-details';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.sportDetailSearch = this.sportDetailSearch.bind(this);
  }

  componentDidMount() {
  }

  sportDetailSearch(event) {
    // console.log(event);
    // const req = {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(search)
    // };

    // fetch('/api/sport-search')
    //   .then(response => response.json())
    //   .then(data => this.setState({
    //     events: data
    //   }))
    //   .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <div className="main">
        <GoogleMap events={this.state}
          callback={() => this.sportDetailSearch(event)}/>
        <EventDetails />
        <Favorites events={this.state}/>
      </div>
    );

  }
}

export default Search;
