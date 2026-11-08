import { Icon } from 'leaflet';

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});
