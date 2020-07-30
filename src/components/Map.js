import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
	Map as LeafletMap,
	TileLayer,
	Marker,
	Tooltip,
} from 'react-leaflet';
import restaurantMarker from '../assets/img/restaurant-marker.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function Map({ cityCenterPosition, onSelectMarker, restaurantData }) {
	const mapRef = useRef();
	useEffect(() => {
		const { current = {} } = mapRef;
		const { leafletElement: map } = current;
		map.flyTo(cityCenterPosition, 12, { duration: 3 });
	}, [cityCenterPosition]);

	const restaurantIcon = new L.Icon({
		iconUrl: restaurantMarker,
		iconRetinaUrl: restaurantMarker,
		iconSize: [27, 36],
		shadowUrl: markerShadow,
		shadowAnchor: [13, 22],
		tooltipAnchor: [15, -10],
	});
	return (
		<MapWrapper
			ref={mapRef}
			center={cityCenterPosition}
			zoom={12}
			zoomControl={false}
		>
			<TileLayer url='https://api.mapbox.com/styles/v1/unpolaco/ck5d0k8m403ju1iqo74h3bii4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW5wb2xhY28iLCJhIjoiY2swNW9qc3ZtMzB1cTNtcGswdnZkdW82cSJ9.3O4zCHkCvu4zhkQ_dZ1Vvg' />
			{restaurantData.map((marker) => (
				<Marker
					key={marker.id}
					onClick={onSelectMarker}
					icon={restaurantIcon}
					position={(marker.lat, marker.latLng)}
				>
					<Tooltip>{marker.name}</Tooltip>
				</Marker>
			))}
		</MapWrapper>
	);
}
const MapWrapper = styled(LeafletMap)`
	position: fixed;
	float: right;
	width: 700px;
	height: 700px;
	bottom: -100px;
	right: -100px;
	overflow: hidden;
	border-radius: 350px;
	z-index: 0;
	@media (min-width: 1024px) {
		position: absolute;
		top: 150px;
		left: 600px;
	}
	@media (max-width: 500px) {
		position: fixed;
		bottom: -100px;
		width: 90vw;
		height: 90vw;
	}
`;
export default Map;
