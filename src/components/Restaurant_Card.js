import React from 'react';
import styled, { keyframes } from 'styled-components';
import uuid from 'uuid';

const RestaurantCard = ({restaurantData, onSelectRestaurant, icon}) => {
	return (
		<Wrapper id='cardWrapper'>
			{restaurantData.map((el, index) => (
				<CardWrapper
					onClick={onSelectRestaurant}
					name={el.name}
					id={el.id}
					index={index}
					className={'test'}
					key={uuid.v4()}
				>
					<RestaurantCardText name={el.name} key={uuid.v4()}>
						{el.name.toUpperCase()}
					</RestaurantCardText>
					<Icon 
						src={icon} 
						alt='restaurant category icon'
					/>
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
	height: 450px;
	width: 600px;
	overflow-x: auto;
	margin-top: 20px;
	z-index: 12;
	transition: 1s;
`;
const unhiddenAnimation = keyframes`
from {opacity: 0}
to {opacity:100%}
`;
const CardWrapper = styled.div`
	position: relative;
	opacity: 0;
	border-radius: 20px;
	border: 1px solid ${({ theme }) => theme.amber600};
	margin: 5px 0;
	background-color: ${({ theme }) => theme.ghostWhite};
	color: ${({ theme }) => theme.blueGrey900};
	width: 92%;
	height: 70px;
	text-align: center;
	animation: ${unhiddenAnimation} 0.3s ease-in-out
		${(props) => props.index * 0.2}s forwards;
	&:hover {
		background-color: ${({ theme }) => theme.amber600};
		color: ${({ theme }) => theme.ghostWhite};
	}
`;
const RestaurantCardText = styled.p`
	font-size: ${(props) => (props.name ? '1.7rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '600' : '')};
	margin: 5px;
`;
const Icon = styled.img`
	position: absolute;
	left: 40px;
	top: 0px;
`
export default RestaurantCard;
