
import React from 'react';
import Header from './header';
import Footer from './footer';
import Search from './search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LikedEvents from './LikedEvents';
import Main from './main';
import SearchTab from './search-tab';

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
    fetch('/api/search')
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
              component={() => <Search props={this.state.search} />}/>

                    <LikedEvents />
        <SearchTab />
        <Main />
            {/* <Route path={'/eventid:eventId'} exact
              component={() => <EventInfo props={this.state} />} /> */}

          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}
