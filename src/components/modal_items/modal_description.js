import React from 'react'
import styled from 'styled-components';

export default function ModalDescription({ selectedRestaurantData }) {
  return (
    <DescriptionWrapper>
    <DescriptionText>
      {selectedRestaurantData.description}
    </DescriptionText>
  </DescriptionWrapper>
  )
}
const FeaturesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 300px;
	color: ${({ theme }) => theme.amber600};
	background-color: ${({ theme }) => theme.ghostWhite};
	border: 1px solid ${({ theme }) => theme.amber600};
	margin: 5px 0;
	padding: 10px 10px;
	border-radius: 10px;
`;
const FeaturesText = styled.p`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
	font-size: ${(props) => (props.name ? '1.7rem' : '1.5rem')};
`;
const DescriptionText = styled(FeaturesText)`
	color: ${({ theme }) => theme.ghostWhite};
	background-color: ${({ theme }) => theme.amber600};
	margin-bottom: 20px;
`;
const DescriptionWrapper = styled(FeaturesWrapper)`
	color: ${({ theme }) => theme.ghostWhite};
	background-color: ${({ theme }) => theme.amber600};
	margin: 20px 0;
`;