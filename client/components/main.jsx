import React from 'react';
import EventDetails from './event-details';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: {
        name: 'map'
      }
    };
  }

  setView(event) {
    this.setState({ view: { name: 'eventDetails' } });
  }

  render() {
    if (this.state.view.name === 'map') {
      return (
        <div className="main col-12 d-flex flex-column align-items-baseline"
          onClick={this.setView} >
        </div>
      );
    } else if (this.state.view.name === 'eventDetails') {
      return (
        <div className="main col-12 d-flex flex-column-reverse align-items-baseline"
          onClick={this.setView} >
          <EventDetails />
        </div>
      );
    }
  }
}
export default Main;
