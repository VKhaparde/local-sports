import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Welcome from './welcome';
import Search from './search';
import LikedEventsList from './liked-events-list';
import EventDetails from './event-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: [],
      schedule: []
    };
  }

  updateLikedEvents(id) {
    this.setState({
      liked: this.state.liked.push(id)
    });
  }

  componentDidMount() {
    // const test = 'soccer';
    // this.userSearch(test);
  }

  // userSearch(test) {
  //   fetch('/api/sport-search')
  //     .then(json => json.json())
  //     .then(data => this.setState({
  //       events: data
  //     }))
  //     .catch(error => console.error('Error', error));
  // }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>

            <Route path='/' exact
              render={() => <Welcome />} />

            <Route path='/search' exact
              render={() =>
                <Search
                  likedEventsCallback={id => this.updateLikedEvents(id)} />} />

            <Route path='/likedEvents' exact
              render={() => <LikedEventsList {...this.state.liked} />} />

            <Route path='/settings' exact
              render={() => <EventDetails />} />

            {/* <Route path={'/eventid:eventId'} exact
              component={() => <EventInfo props={this.state} />} /> */}

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
