import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../assets/svg/close-outline.svg';
import Features from './modal_items/Modal_Features';
import Categories from './modal_items/Modal_Categories';
import Contact from './modal_items/Modal_Contact';
import Rating from './modal_items/Modal_Rating';
import Description from './modal_items/Modal_Description';
import Open from './modal_items/Modal_Open';
import Main from './modal_items/Modal_Main';
import Price from './modal_items/Modal_Price';

const RestaurantModal = ({
	selectedRestaurantData,
	onCloseModal,
}) => {
	return (
		<Wrapper>
			<CloseBtn onClick={onCloseModal} />
			<Main selectedRestaurantData={selectedRestaurantData} />
			{selectedRestaurantData.open ? (
				<Open selectedRestaurantData={selectedRestaurantData} />
			) : null}
			{selectedRestaurantData.rating ? (
				<Rating selectedRestaurantData={selectedRestaurantData} />
			) : null}
			{selectedRestaurantData.priceText ? (
				<Price selectedRestaurantData={selectedRestaurantData} />
			) : null}
			{selectedRestaurantData.contact ? (
				<Contact selectedRestaurantData={selectedRestaurantData} />
			) : null}
			{selectedRestaurantData.categories ? (
				<Categories selectedRestaurantData={selectedRestaurantData} />
			) : null}
			{selectedRestaurantData.features ? (
				<Features selectedRestaurantData={selectedRestaurantData} />
			) : null}
			{selectedRestaurantData.description ? (
				<Description selectedRestaurantData={selectedRestaurantData} />
			) : null}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	z-index: 100;
	display: flex;
	flex-direction: column;
	align-items: center;
	left: 60px;
	top: 125px;
	height: 470px;
	width: 450px;
	background-color: ${({ theme }) => theme.ghostWhite};
	border: 1px solid ${({ theme }) => theme.amber600};
	overflow-x: auto;
	margin-top: 20px;
	border-radius: 25px;
	transition: 0.3s;
	svg {
		width: 20px;
		height: 20px;
		stroke: ${({ theme }) => theme.blueGrey900};
		fill: ${({ theme }) => theme.blueGrey900};
		margin-right: 15px;
	}
`;
const CloseBtn = styled(CloseIcon)`
	position: absolute;
	top: 10px;
	right: -5px;
	width: 30px;
	height: 30px;
	stroke: ${({ theme }) => theme.amber600};
	border: 2px solid ${({ theme }) => theme.ghostWhite};
	border-radius: 50%;
	transition: 0.3s;
	&:hover {
		border: 2px solid ${({ theme }) => theme.ghostWhite};
		border-radius: 50%;
		background-color: ${({ theme }) => theme.amber600};
		stroke: ${({ theme }) => theme.ghostWhite};
	}
`;
export default RestaurantModal;
