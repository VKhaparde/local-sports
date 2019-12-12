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

  sportSearch(sport) {
    fetch(`/api/sport-search?sport=${sport}`)
      .then(response => response.json())
      .then(data => {
        const selectedDayEvents = this.showEventsForSelectedDays(data);
        this.setState({
          events: selectedDayEvents
        });
      })
      .catch(error => console.error('Error', error));
  }

  showEventsForSelectedDays(eventsData) {
    const schedule = this.props.schedule;
    const selectedDayEvents = [];
    for (let dayIndex = 0; dayIndex < schedule.length; dayIndex++) {
      for (let eventIndex = 0; eventIndex < eventsData.length; eventIndex++) {
        if (eventsData[eventIndex]['event-day'] === schedule[dayIndex]) {
          selectedDayEvents.push(eventsData[eventIndex]);
        }
      }
    }
    return selectedDayEvents;
  }

  detailSearch(id) {
    fetch(`/api/event-search?id=${id}`)
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
    this.setState({
      eventInfoDisplay: !this.state.eventInfoDisplay
    });
  }

  render() {
    if (this.state.eventInfoDisplay === true) {
      return (
        <div className="">
          <GoogleMap
            events={this.state}
            display={this.state.eventInfoDisplay}
            callback={sport => this.detailSearch(sport)} />
          <EventDetails
            events={this.state.eventInfo}
            likedEvents={this.props.likedEvents}
            addLike={id => this.props.addLiked(id)}
            removeLike={id => this.props.removeLiked(id)}
            toggleView={() => this.toggleDetailView()} />
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
          <GoogleMap
            display={this.state.eventInfoDisplay}
            events={this.state}
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
          <GoogleMap
            events={this.state}
            callback={sport => this.detailSearch(sport)}
            listCallback={events => this.displayList(events)} />
          <EventList
            events={this.state}
            likedEvents={this.props.likedEvents}
            onClick={id => this.detailSearch(id)} />
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
