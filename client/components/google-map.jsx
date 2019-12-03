import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
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
      zoom: 10,
      center: {
        lat: 33.642567,
        lng: -117.387054
      },
      disableDefaultUI: true
    });
  }

  createMarker() {
    // map through state or prop obj to render markers for each event
    // const marker3 = new window.google.maps.Marker({
    //   position: { lat: 33.552567, lng: -117.347054 },
    //   map: this.googleMap
    // });

    // const marker2 = new window.google.maps.Marker({
    //   position: { lat: 33.542567, lng: -117.387054 },
    //   map: this.googleMap
    // });

    const marker = new window.google.maps.Marker({
      position: { lat: 33.642567, lng: -117.387054 },
      map: this.googleMap
    });
    marker.addListener('click', () => {
      this.googleMap.setCenter(marker.getPosition());
      this.props.callback('soccer');
      // add click handler to lift state id through callback
      // unbind createMarker method
    });
  }

  render() {

    return (
      <div
        ref={this.googleMapRef}
        style={{ height: '100%' }}
        id="google-map"
        className="card-panel white map-holder">
      </div>
    );
  }
}

export default GoogleMap;
