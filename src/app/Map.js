import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/Map.css'
import L from 'leaflet';

function Map() {
  const customDivIcon = new L.DivIcon({
    className: 'custom-marker-icon',
    html:
      '<div><span class="material-symbols-outlined" style="font-size:3.3em;color:#6c757d">location_on</span></div>',
  })

  return (
    <div>
      <MapContainer
        center={[43.70, -79.42]}
        zoom={13}
        style={{ width: '100%', height: '500px' }}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="topright" />
        <Marker position={[43.70, -79.42]} icon={customDivIcon}>
          <Popup>Your current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
