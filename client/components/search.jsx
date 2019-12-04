import React from 'react';
import GoogleMap from './google-map';
import EventDetails from './event-details';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventInfo: null,
      eventInfoDisplay: 'none'
    };

    this.detailSearch = this.detailSearch.bind(this);
  }

  componentDidMount() {

  }

  detailSearch(id) {
    fetch(`/api/event-search? id=${id}`)
      .then(response => response.json())
      .then(data => this.setState({
        eventInfo: data,
        eventInfoDisplay: 'active'
      }))
      .catch(error => console.error('Error', error));
  }

  render() {

    if (this.state.eventInfoDisplay === 'active') {

      return (
        <div className="main">
          <GoogleMap events={this.state}
            callback={sport => this.detailSearch(sport)} />
          <EventDetails eventInfo={this.state.eventInfo}/>

        </div>
      );
    } else {

      return (
        <div className="main">
          <GoogleMap events={this.state}
            callback={sport => this.detailSearch(sport)} />
        </div>
      );
    }

  }
}

export default Search;
