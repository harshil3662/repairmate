import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/Map.css'
import L from 'leaflet';
import { useState, useEffect } from 'react';

function Map() {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const customDivIcon = new L.DivIcon({
    className: 'custom-marker-icon',
    html:
      '<div><span class="material-symbols-outlined" style="font-size:3.3em;color:#6c757d">location_on</span></div>',
  })

  return (
    <div className='map-container'>
      {loading ? (
        <div style={{textAlign:'center'}}>Loading...</div>
      ) : (
        <MapContainer
          center={userLocation || [43.70, -79.42]}
          zoom={13}
          style={{ width: '100%', height: '500px' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {userLocation && (
            <Marker position={[userLocation.lat, userLocation.lng]} icon={customDivIcon}>
              <Popup>Your current location</Popup>
            </Marker>
          )}
          {/* {locations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]} icon={customDivIcon}>
              <Popup>A sample location on the map.</Popup>
            </Marker>
          ))} */}
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
