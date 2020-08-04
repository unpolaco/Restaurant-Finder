import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RatingIcon } from '../../assets/svg/happy-outline.svg';

export default function ModalRating({ selectedRestaurantData }) {
	return (
		<RatingWrapper>
			{selectedRestaurantData.rating ? (
				<RatingItemWrapper>
					<RatingIcon />
					<Text>{selectedRestaurantData.rating}/10</Text>
				</RatingItemWrapper>
			) : null}
			{selectedRestaurantData.ratingSignals ? (
				<Text> {selectedRestaurantData.ratingSignals} votes</Text>
			) : null}
		</RatingWrapper>
	);
}

const RatingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 150px;
	margin: 10px 0;
`;
const RatingItemWrapper = styled.div`
	display: flex;
`;
const Text = styled.p`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.blueGrey900};
	font-size: ${(props) => (props.name ? '1.8rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '800' : '')};
`;
