
import React from 'react';
import Header from './header';
import Footer from './footer';
import Search from './search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LikedEvents from './LikedEvents';
import EventList from './event-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      liked: []
    };
  }

  componentDidMount() {
    const test = 'soccer';
    this.userSearch(test);
  }

  userSearch(test) {
    fetch('/api/sport-search')
      .then(json => json.json())
      .then(data => this.setState({
        events: data
      }))
      .catch(error => console.error('Error', error));
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>

            <Route path='/search' exact
              render={() => <Search props={this.state.search} />}/>

            <Route path='/likedEvents' exact
              render={() => <LikedEvents />} />

            <Route path='/eventList' exact
              render={() => <EventList events={this.state.events}/>} />

            {/* <Route path={'/eventid:eventId'} exact
              component={() => <EventInfo props={this.state} />} /> */}

          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}
