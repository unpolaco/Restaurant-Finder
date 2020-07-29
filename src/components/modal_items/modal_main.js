import React from 'react';
import styled from 'styled-components';

export default function ModalMain({ selectedRestaurantData }) {
	return (
		<PhotoAndNameWrapper>
			{selectedRestaurantData.photo ? (
				<Photo src={selectedRestaurantData.photo} alt='restaurant' />
			) : null}
			{selectedRestaurantData.name ? (
				<Text name='name'>{selectedRestaurantData.name}</Text>
			) : null}
			{selectedRestaurantData.location ? (
				<>
					<Text name='name'>{selectedRestaurantData.location}</Text>
					<Text name='name'>{selectedRestaurantData.city}</Text>
				</>
			) : null}
		</PhotoAndNameWrapper>
	);
}
const PhotoAndNameWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 320px;
	padding: 15px;
	border-radius: 25px;
`;
const Text = styled.p`
	display: flex;
	color: ${({ theme }) => theme.blueGrey900};
	align-items: center;
	font-size: ${(props) => (props.name ? '1.8rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '800' : '')};
`;
const Photo = styled.img`
	width: 250px;
	height: 250px;
	border: 1px solid ${({ theme }) => theme.amber600};
	border-radius: 50%;
	margin: 20px;
`;