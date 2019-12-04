import React from 'react';
import Favorites from './favorites';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.googleMapRef = React.createRef();
    this.GOOGLE_MAP_API_KEY = 'AIzaSyD3QCxuw - dLr9u23x2dU7BJXmU4PLso5vY';

    this.createMarker = this.createMarker.bind(this);
  }

  componentDidMount() {
    if (!document.getElementById('map')) {
      const googleMapScript = document.createElement('script');
      googleMapScript.setAttribute('id', 'map');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.GOOGLE_MAP_API_KEY}&libraries=places`;
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener('load', () => {
        this.googleMap = this.createGoogleMap();
        this.createMarker();
      });
    } else {
      this.googleMap = this.createGoogleMap();
      this.createMarker();
    }

  }

  createGoogleMap() {
    return new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 11,
      center: {
        lat: 33.657567,
        lng: -117.83154
      },
      disableDefaultUI: true
    });
  }

  sportSearch(sport) {
    fetch(`/api/sport-search? sport=${sport}`)
      .then(response => response.json())
      .then(data => this.setState({
        events: data
      }))
      .catch(error => console.error('Error', error));

    this.createMarker();
  }

  createMarker() {
    this.state.events.map(event => {
      const marker = new window.google.maps.Marker({
        position: { lat: event.lat, lng: -event.lng },
        map: this.googleMap,
        id: event.id
      });
      marker.addListener('click', () => {
        this.googleMap.setCenter(marker.getPosition());
        this.props.callback(marker.id);
      });
    });
  }

  render() {
    return (
      <div className="main">
        <div
          ref={this.googleMapRef}
          style={{ height: '100%' }}
          id="google-map"
          className="card-panel white map-holder">
        </div>
        <Favorites events={this.state}
          callback={sport => this.sportSearch(sport)} />
      </div>
    );
  }
}

export default GoogleMap;
