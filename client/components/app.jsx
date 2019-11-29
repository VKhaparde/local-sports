
import React from 'react';
import Header from './header';
import Footer from './footer';
import Dynamic from './dynamic';
import SearchTab from './search-tab';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isTesting: true
    };
  }

  componentDidMount() {
    // fetch('/api/health-check')
    //   .then(res => res.json())
    //   .then(data => this.setState({ message: data.message || data.error }))
    //   .catch(err => this.setState({ message: err.message }))
    //   .finally(() => this.setState({ isTesting: false }));
  }

  render() {
    return (
      <div className="">
        <Header />
        <SearchTab />
        <Dynamic />
        <Footer />
      </div>
    );
    // return this.state.isTesting
    //   ? <Homepage />
    //   : <h1>{this.state.message}</h1>;
  }
}
