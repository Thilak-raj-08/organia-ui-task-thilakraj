'use client';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  onLocationSelect: (lat: number, lng: number) => void;
  defaultLat?: number;
  defaultLng?: number;
}

function LocationMarker({ onLocationSelect, defaultLat, defaultLng }: MapComponentProps) {
  const [position, setPosition] = useState<[number, number]>([
    defaultLat || 9.6615,
    defaultLng || 80.0255,
  ]);

  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      onLocationSelect(e.latlng.lat, e.latlng.lng);
    },
  });

  return <Marker position={position} />;
}

const MapComponent = ({ onLocationSelect, defaultLat, defaultLng }: MapComponentProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Loading map...</span>
      </div>
    );
  }

  const centerLat = defaultLat || 9.6615;
  const centerLng = defaultLng || 80.0255;

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={7}
      style={{ height: '160px', width: '100%', borderRadius: '0.5rem' }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker onLocationSelect={onLocationSelect} defaultLat={defaultLat} defaultLng={defaultLng} />
    </MapContainer>
  );
};

export default MapComponent;
