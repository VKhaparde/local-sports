import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import SignIn from './sign-in';
import Search from './search';
import Settings from './settings';
import Welcome from './welcome';
import LikedEventsList from './liked-events-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: [
        { id: 1, title: 'Soccer Co-Ed', location: 'Irvine Great Park', rating: 5, distance: 0.3 },
        { id: 2, title: 'Basketball 5-on-5', location: 'Los Olivos Community Park', rating: 8, distance: 1.3 },
        { id: 3, title: 'Baseball Intermediate', location: 'Sweet Shade Park', rating: 7, distance: 0.3 },
        { id: 4, title: 'Basketball Intermediate', location: 'Los Olivos Community Park', rating: 7, distance: 0.3 }
      ],
      schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    };
  }

  componentDidMount() {
    // this.loadUser()
  }

  loadUser() {
    // fetch()
  }

  updateLikedEvents(id) {
    this.setState({
      liked: this.state.liked.push(id)
    });
  }

  removeLikedEvent(id) {
    this.setState({
      liked: this.state.liked.filter(event => {
        return event.id !== id;
      })
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

            <Route path='/search' exact
              render={() =>
                <Search
                  likedEventsCallback={id => this.updateLikedEvents(id)} />} />

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
