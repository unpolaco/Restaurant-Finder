import React from 'react';
import styled from 'styled-components';

export default function ModalPrice({ selectedRestaurantData }) {
	return (
		<PriceWrapper>
			<Text>price: {selectedRestaurantData.priceText}</Text>
		</PriceWrapper>
	);
}

const PriceWrapper = styled.div`
	margin: 10px 0;
`;
const Text = styled.p`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.blueGrey900};
	font-size: ${(props) => (props.name ? '1.8rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '800' : '')};
`;
