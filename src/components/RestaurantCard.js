import React from 'react';
import styled, { keyframes } from 'styled-components';
import uuid from 'uuid';

const RestaurantCard = (props) => {
	return (
		<Wrapper id='cardWrapper'>
			{props.restaurantData.map((el, index) => (
				<CardWrapper
					onClick={props.onSelectRestaurant}
					name={el.name}
					index={index}
					className={'test'}
					key={uuid.v4()}
				>
					<RestaurantCardText name={el.name} key={uuid.v4()}>
						{el.name.toUpperCase()}
					</RestaurantCardText>
					<RestaurantCardText key={uuid.v4()}>
						{el.address.street}
					</RestaurantCardText>
				</CardWrapper>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 500px;
	width: 600px;
	overflow-x: auto;
	margin-top: 20px;
	z-index: 12;
`;
const unhiddenAnimation = keyframes`
from {opacity: 0}
to {opacity:100%}
`;
const CardWrapper = styled.div`
	opacity: 0;
	border-radius: 20px;
	border: 1px solid #ffc107;
	margin: 5px 0;
	background-color: ${({ theme }) => theme.backgroundColor};
	color: grey;
	width: 92%;
	height: 70px;
	text-align: center;
	animation: ${unhiddenAnimation} 0.5s ease-in-out
		${(props) => props.index * 0.2}s forwards;
	&:hover {
		background-color: #ffc107;
		color: ${({ theme }) => theme.backgroundColor};
	}
`;
const RestaurantCardText = styled.p`
	font-size: ${(props) => (props.name ? 'fontM' : 'fontS')};
	font-weight: ${(props) => (props.name ? '600' : '')};
	line-height: 8px;;
`;
export default RestaurantCard;
