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
      schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      Monday: true,
      Tuesday: true,
      Wednesday: true,
      Thursday: true,
      Friday: true,
      Saturday: true,
      Sunday: true
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    fetch('/api/user-liked-events')
      .then(data => data.json())
      .then(data => this.setState({
        liked: data['liked-events']
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
      .then(data => this.setState(liked => {
        const likedArray = this.state.liked.concat(event);
        return { liked: likedArray };
      }));
  }

  removeLikedEvent(event) {
    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'event-id': event['event-id']
      })
    };

    fetch('/api/user-liked-events', req)
      .then(data => data.json())
      .then(data => this.setState(state => {
        const list = this.state.liked.filter(events => events['event-id'] !== event['event-id']);
        return { liked: list };
      })
      );
  }

  removeFromSchedule(day) {
    this.setState({
      [day]: !this.state[day],
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
    this.setState({ [day]: !this.state[day] });
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
              render={props => <SignIn {...props}
                callbackSignIn={() => this.loadUser()} />} />

            <Route path='/createAccount' exact
              render={() => <CreateAccount />} />

            <Route path='/search' exact
              render={() =>

                <div>
                  <Search
                    likedEvents={this.state.liked}
                    addLiked={id => this.addLikedEvents(id)}
                    removeLiked={id => this.removeLikedEvent(id)}
                    schedule={this.state.schedule} />
                  <Footer />
                </div>} />

            <Route path='/likedEvents' exact
              render={() =>
                <div>
                  <LikedEventsList
                    likedEvents={this.state.liked}
                    removeLike={id => this.removeLikedEvent(id)} />
                  <Footer />
                </div>} />

            <Route path='/settings' exact
              render={() =>
                <div>
                  <Settings
                    removeFromSchedule={day => this.removeFromSchedule(day)}
                    addToSchedule={day => this.addToSchedule(day)}
                    schedule={this.state.schedule}
                    days={this.state} />
                  <Footer />
                </div>} />

          </Switch>
        </div>
      </Router >
    );
  }
}
