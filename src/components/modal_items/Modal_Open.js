import React from 'react'
import styled from 'styled-components';

export default function ModalOpen({ selectedRestaurantData }) {
  return (
    <OpenText
    color={
      selectedRestaurantData?.open.includes('Open') ? 'green' : 'red'
    }
  >
    {selectedRestaurantData.open}
  </OpenText>
  )
}
const OpenText = styled.span`
	font-size: ${(props) => (props.name ? '1.8rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '800' : '')};
	color: ${(props) => props.color};
	align-items: center;
	margin: 10px 0;
`;