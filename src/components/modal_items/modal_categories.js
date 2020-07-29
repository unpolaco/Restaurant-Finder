import React from 'react';
import styled from 'styled-components';

export default function ModalCategories({ selectedRestaurantData }) {
	return (
		<FlexWrapper>
			{selectedRestaurantData.categories?.map((category) => {
				return (
					<CategoryWrapper
						key={category.name}>
						<CategoryIcon src={category.icon} alt='category icon' />
						<CategoryText>{category.name}</CategoryText>
					</CategoryWrapper>
				);
			})}
		</FlexWrapper>
	);
}

const CategoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 130px;
	margin: 10px 0;
`;
const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const CategoryText = styled.p`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.amber600};
	font-size: ${(props) => (props.name ? '1.7rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '600' : '')};
`;
const CategoryIcon = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.amber600};
	border: 1px solid ${({ theme }) => theme.amber600};
`;
