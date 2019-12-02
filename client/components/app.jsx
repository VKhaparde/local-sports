
import React from 'react';
import Header from './header';
import Footer from './footer';
import LikedEvents from './LikedEvents';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isTesting: true
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <LikedEvents />
        <Footer />
      </div>
    );
  }
}
