import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapComponent({ profileId }) {
  const position = { lat: 40.748817, lng: -73.985428 }; // replace with actual profile coordinates

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={position} zoom={10}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
