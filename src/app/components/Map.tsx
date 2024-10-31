// src/app/components/Map.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import styles from './Map.module.css';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 13 }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mapContainerRef.current || typeof window === 'undefined') return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', // OpenStreetMap-based style
      center: [longitude, latitude],
      zoom: zoom,
    });

    map.on('load', () => setLoading(false)); 


    new maplibregl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    return () => map.remove(); 
  }, [latitude, longitude, zoom]);

  return (
    <div className={styles.mapWrapper}>
      {loading && <div className={styles.loading}>در حال بارگذاری نقشه...</div>}
      <div ref={mapContainerRef} className={styles.mapContainer} />
    </div>
  );
};

export default Map;
