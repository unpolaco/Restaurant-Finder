import React from 'react';
import styled from 'styled-components';

const RestaurantModal = ({ selectedRestaurantData }) => {
	return (
		<Wrapper>
			{selectedRestaurantData.photo ? (
				<Photo src={selectedRestaurantData.photo} alt='restaurant' />
			) : null}
			{selectedRestaurantData.location ? (
				<>
					<span>{selectedRestaurantData.location}</span>
					<span>{selectedRestaurantData.city}</span>
				</>
			) : null}
			{selectedRestaurantData.categories?.map((category) => {
				return (
					<span>
						<Icon src={category.icon} alt='category icon' />
						{category.name}
					</span>
				);
			})}
			{selectedRestaurantData.features ? (
				<>
					{selectedRestaurantData.features?.map((feature) => {
						return (
							<p>
								{feature?.name}
								{feature?.items?.map((item) => {
									return <span>{item?.itemValue}</span>;
								})}
							</p>
						);
					})}
				</>
			) : null}
			{selectedRestaurantData.contact?.url ? (
				<a
					href={selectedRestaurantData.contact?.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					link visit our page
				</a>
			) : null}
			{selectedRestaurantData.contact?.facebook ? (
					<a
						href={selectedRestaurantData.contact?.facebook}
						target='_blank'
						rel='noopener noreferrer'
					>
						{selectedRestaurantData.contact?.facebook}
					</a>
			) : null}
			{selectedRestaurantData.contact?.phone ? (
				<span>phone {selectedRestaurantData.contact?.phone}</span>
			) : null}
			{selectedRestaurantData.priceText ? (
				<span>price {selectedRestaurantData.priceText}</span>
			) : null}
			{selectedRestaurantData.price ? (
				<span>price {selectedRestaurantData.price}</span>
			) : null}
			{selectedRestaurantData.rating ? (
				<span>rating {selectedRestaurantData.rating}</span>
			) : null}
			{selectedRestaurantData.ratingSignals ? (
				<span>votes {selectedRestaurantData.ratingSignals}</span>
			) : null}
			{selectedRestaurantData.open ? (
				<span>now is: {selectedRestaurantData.open}</span>
			) : null}
			{selectedRestaurantData.description ? (
				<span>description {selectedRestaurantData.description}</span>
			) : null}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: absolute;
	z-index: 100;
	display: flex;
	flex-direction: column;
	height: 500px;
	width: 600px;
	left: 300px;
	background-color: white;
	border: 3px solid #ffb300;
	overflow-x: auto;
	margin-top: 20px;
	border-radius: 25px;
`;
const Photo = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 50%;
`;
const Icon = styled.img`
	width: 40px;
	height: 40px;
	background-color: #ffb300;
	border-radius: 50%;
	border: 1px solid #ffb300;
`;

export default RestaurantModal;
