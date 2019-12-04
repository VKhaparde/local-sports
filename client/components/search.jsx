
import React from 'react';
import GoogleMap from './google-map';
import Favorites from './favorites';
import EventList from './event-list';
import EventDetails from './event-details';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventInfo: [],
      eventInfoDisplay: false,
      view: 'map'
    };

    this.detailSearch = this.detailSearch.bind(this);
  }

  componentDidMount() {

  }

  sportSearch(sport) {
    fetch(`/api/sport-search? sport=${sport}`)
      .then(response => response.json())
      .then(data => this.setState({
        events: data
      })) // this.createMarker needs to get passed down for GoogleMap
      .catch(error => console.error('Error', error));
  }

  detailSearch(id) {
    fetch(`/api/event-search? id=${id}`)
      .then(response => response.json())
      .then(data => this.setState({
        eventInfo: data,
        eventInfoDisplay: true
      }))
      .catch(error => console.error('Error', error));
  }

  toggleList() {
    this.setState({
      view: 'list'
    });
  }

  toggleMap() {
    this.setState({
      view: 'map'
    });
  }

  toggleDetailView() {
    // will be passed as a prop to EventDetails component to have a back button
    // console.log('clicked')
    // this.setState({
    //   eventInfoDisplay: !this.state.eventInfoDisplay
    // })
  }

  render() {
    if (this.state.eventInfoDisplay === true) {
      return (
        <div className="">
          <GoogleMap events={this.state}
            callback={sport => this.detailSearch(sport)} />
          <EventDetails events={this.state.eventInfo}
            callback={id => this.props.likedEventsCallback(id)}/>
          <Favorites
            events={this.state}
            callback={sport => this.sportSearch(sport)}
            listCallback={() => this.toggleList()} />
        </div>
      );
    }

    if (this.state.view === 'map') {
      return (
        <div className="">
          <GoogleMap events={this.state}
            callback={sport => this.detailSearch(sport)}
            listCallback={events => this.displayList(events)} />
          <Favorites
            events={this.state}
            callback={sport => this.sportSearch(sport)}
            listCallback={() => this.toggleList()} />
        </div>
      );
    }

    if (this.state.view === 'list') {
      return (
        <div className=''>
          <GoogleMap events={this.state}
            callback={sport => this.detailSearch(sport)}
            listCallback={events => this.displayList(events)} />
          <EventList events={this.state}
            onClick={id => this.detailSearch(id)}/>
          <Favorites
            events={this.state}
            callback={sport => this.sportSearch(sport)}
            listCallback={() => this.toggleMap()} />
        </div>
      );
    } else {

      return (
        <div className="">
          <GoogleMap events={this.state}
            callback={sport => this.detailSearch(sport)} />
          <Favorites
            events={this.state}
            callback={sport => this.sportSearch(sport)}
            listCallback={() => this.toggleList()} />
        </div>
      );
    }

  }
}

export default Search;
