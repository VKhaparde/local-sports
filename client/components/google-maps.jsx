import React, { useEffect, useRef } from 'react';

// Variables
const GOOGLE_MAP_API_KEY = 'AIzaSyD3QCxuw-dLr9u23x2dU7BJXmU4PLso5vY';
const myLocation = {
  lat: 33.642567,
  lng: -117.387054
};

function GoogleMaps(props) {
  // refs
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 14,
      center: {
        lat: myLocation.lat,
        lng: myLocation.lng
      },
      disableDefaultUI: true
    });

  // const createMarkers = () =>
  //   props.props.map(event =>
  //     new window.google.maps.Marker({
  //       position: { lat: event.lat, lng: event.lng },
  //       map: googleMap.current
  //     }));

  const createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: myLocation.lat, lng: myLocation.lng },
      map: googleMap.current
    });

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  });

  return (
    <div>
      <div id="google-map"
        className='main col-12 p-0'
        ref={googleMapRef}>
      </div>
    </div>
  );

}

export default GoogleMaps;
