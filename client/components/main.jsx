import React from 'react';
import GoogleMaps from './search';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.sportSearch();
  }

  sportSearch() {
    // const req = {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(search)
    // };

    fetch('/api/search')
      .then(response => response.json())
      .then(data => this.setState({
        events: data
      }))
      .catch(error => console.error('Error', error));
  }

  render() {
    // console.log(this.state);
    return (
      <div className="main col-12 p-0">
        <GoogleMaps events={this.state.events}/>
      </div>
    );

  }
}

export default Main;
