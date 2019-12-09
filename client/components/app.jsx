import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import SignIn from './sign-in';
import Search from './search';
import Settings from './settings';
import Welcome from './welcome';
import LikedEventsList from './liked-events-list';
import CreateAccount from './create-account';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: [],
      schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    fetch('/api/user-liked-events')
      .then(data => data.json())
      .then(data => this.setState({
        liked: data
      }));
  }

  addLikedEvents(event) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'event-id': event['event-id']
      })
    };

    fetch('/api/user-liked-events', req)
      .then(data => data.json())
      .then(data => this.setState({ liked: this.state.liked, data }));
  }

  removeLikedEvent(id) {

    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'event-id': id
      })
    };

    fetch('/api/user-liked-events', req)
      .then(data => data.json())
      .then(data => event => {
        const eventId = this.state.liked.filter(events => events.id !== id);
        this.setState({ liked: eventId });
      });
  }

  searchLikedEvent(id) {
  }

  removeFromSchedule(day) {
    this.setState({
      schedule: this.state.schedule.filter(event => {
        return event !== day;
      })
    });
  }

  addToSchedule(day) {
    this.setState(state => {
      const schedule = state.schedule.concat(day);
      return { schedule };
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>

            <Route path='/' exact
              render={() => <Welcome />} />

            <Route path='/signIn' exact
              render={() => <SignIn />} />

            <Route path='/createAccount' exact
              render={() => <CreateAccount />} />

            <Route path='/search' exact
              render={() =>
                <Search
                  likedEventsCallback={id => this.addLikedEvents(id)} />} />

            <Route path='/likedEvents' exact
              render={() =>
                <LikedEventsList
                  likedEvents={this.state.liked}
                  removeLike={id => this.removeLikedEvent(id)}
                  searchLike={id => this.searchLikedEvent(id)} />} />

            <Route path='/settings' exact
              render={() => <Settings
                removeFromSchedule={day => this.removeFromSchedule(day)}
                addToSchedule={day => this.addToSchedule(day)}
                schedule={this.state.schedule} />} />

          </Switch>
          <Footer />
        </div>
      </Router >
    );
  }
}
