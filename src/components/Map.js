import React from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../assets/svg/map-pointer.svg';

export default class Map extends React.Component {

	handleClickMarker = (e) => {
		// console.log(e.target.options.id)
	}
	componentDidMount() {
		this.map = L.map('map', {
			center: this.props.cityCenterPosition,
			zoom: 12,
			zoomControl: false,
		});
		L.tileLayer(
			'https://api.mapbox.com/styles/v1/unpolaco/ck5d0k8m403ju1iqo74h3bii4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW5wb2xhY28iLCJhIjoiY2swNW9qc3ZtMzB1cTNtcGswdnZkdW82cSJ9.3O4zCHkCvu4zhkQ_dZ1Vvg',
			{
				detectRetina: true,
				maxZoom: 20,
				maxNativeZoom: 17,
			}
		).addTo(this.map);
		this.layer = L.layerGroup().addTo(this.map);

		let DefaultIcon = L.icon({
			iconUrl: icon,
			iconSize: [27, 36],
		});
		L.Marker.prototype.options.icon = DefaultIcon;
	}

	componentDidUpdate({ restaurantData, selectedRestaurant }) {
		if (this.props.restaurantData !== restaurantData) {
			this.updateMarkers(this.props.restaurantData);
		}
		this.map.flyTo(this.props.cityCenterPosition, 12);
	}
	updateMarkers(restaurantData) {
		this.layer.clearLayers();
		restaurantData.forEach((marker) => {
			L.marker(marker.latLng, { title: marker.name, id: marker.id })
				.addTo(this.layer)
				.on('click', this.handleClickMarker)
				.bindPopup(marker.name)
        .on('mouseover', function (e) {
            this.openPopup();
        })
        .on('mouseout', function (e) {
            this.closePopup();
        })
		});
	}
	render() {
		const { cityCenterPosition, onSelectMarker } = this.props;
		return (
			<MapWrapper
				id='map'
				cityCenterPosition={cityCenterPosition}
				onClick={onSelectMarker}
			></MapWrapper>
		);
	}
}

const MapWrapper = styled.div`
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
