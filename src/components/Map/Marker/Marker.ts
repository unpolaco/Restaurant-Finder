import L from 'leaflet';
import marker from '../../../assets/img/marker.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

	export const restaurantMarker = new L.Icon({
		iconUrl: marker,
		iconRetinaUrl: marker,
		iconSize: [27, 36],
		shadowUrl: markerShadow,
		shadowAnchor: [13, 22],
		tooltipAnchor: [15, -10],
	});