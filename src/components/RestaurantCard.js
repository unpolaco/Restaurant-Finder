import React from 'react'
import styled from 'styled-components';

const RestaurantCard = (props) => {
  return (
    <Wrapper>
      {props.restaurantData.map(el => (
        <CardWrapper key={el.lat}>
          <RestaurantCardText key={el.name}>{el.name}</RestaurantCardText>
          <RestaurantCardText key={el.address.street}>{el.address.street}</RestaurantCardText> 
        </CardWrapper>
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 300px;
overflow-x: auto;
`
const CardWrapper = styled.div`
border: 1px solid;
border-radius: 1.2em;
margin: 3px 0;
background-color: #ffc107;
color: white;
width: 20vw;
text-align: center;
`
const RestaurantCardText = styled.p`
/* font-family: 'Roboto', sans-serif; */
font-size: ${(props) => props.name ? '1.2em' : '1em'};
font-weight: ${(props) => props.name ? 'semibold' : ''};
line-height: 0.5em;
`
export default RestaurantCard;