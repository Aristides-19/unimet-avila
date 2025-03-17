import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PropTypes from 'prop-types';
import styles from './Map.module.css';

// Corregir el ícono predeterminado de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export const MeetingLocationMap = ({ meetingLocation }) => {
  const { latitude, longitude } = meetingLocation;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={false}
      className={styles.container}
    >
      <TileLayer
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {/* Marcador fijo */}
      <Marker position={[latitude, longitude]}>
        <Popup>
          Punto de Encuentro <br /> Latitud: {latitude}, Longitud: {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

MeetingLocationMap.propTypes = {
  meetingLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};
