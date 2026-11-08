import { useEffect, useRef } from 'react';
import { Map as LeafletMap, Marker, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { City, Offer } from '@/types';
import { defaultCustomIcon } from './map.constants';

const TILE_LAYER_URL_PATTERN =
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

type MapProps = {
  city: City;
  offers: Offer[];
  className?: string;
};

function Map({ city, offers, className }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const { latitude, longitude, zoom } = city.location;

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = new LeafletMap(mapRef.current, {
      center: [latitude, longitude],
      zoom,
    });

    new TileLayer(TILE_LAYER_URL_PATTERN, {
      attribution: TILE_LAYER_ATTRIBUTION,
      maxZoom: 19,
    }).addTo(map);

    offers.forEach((offer) => {
      new Marker([offer.location.latitude, offer.location.longitude], {
        icon: defaultCustomIcon,
        title: offer.title,
        alt: offer.title,
      }).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [latitude, longitude, zoom, offers]);

  return (
    <section
      className={className ? `${className} map` : 'cities__map map'}
      ref={mapRef}
      aria-label="Map of rental offers"
    />
  );
}

export default Map;
