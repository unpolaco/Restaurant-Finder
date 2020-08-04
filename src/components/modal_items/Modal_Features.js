import React from 'react';
import styled from 'styled-components';

export default function ModalFeatures({ selectedRestaurantData }) {
	return (
		<>
			{selectedRestaurantData.features?.map((feature) => {
				return (
					<FeaturesWrapper 
						color='reverse'
						key={feature?.name}>
						<FeaturesText 
							name='featureTitle'
						>{feature?.name}</FeaturesText>
						<ColumnWrapper>
							{feature?.items?.map((item) => {
								return <FeaturesText key={item?.itemValue}>{item?.itemValue}</FeaturesText>;
							})}
						</ColumnWrapper>
					</FeaturesWrapper>
				);
			})}
		</>
	);
}

const FeaturesText = styled.p`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
	font-size: ${(props) => (props.name ? '1.7rem' : '1.5rem')};
`;
const FeaturesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 300px;
	color: ${({ theme }) => theme.amber600};
	background-color: ${({ theme }) => theme.ghostWhite};
	margin: 5px 0;
	padding: 10px 10px;
	border: 1px solid ${({ theme }) => theme.amber600};
	border-radius: 10px;
`;
const ColumnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
`;
