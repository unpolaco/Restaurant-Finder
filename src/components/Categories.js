import React from 'react';
import styled from 'styled-components';

const Categories = (props) => {
  return (
    <Select onChange={props.change}>
        {props.categories.map(category => <option key={category.id}>{category.name}</option>)}
    </Select>
  )
}

const Select = styled.select`
font-family: 'Roboto', sans-serif;
font-size: 16px;
flex-basis: 100%;
border: solid 1px #dbdbdb;
cursor: text;
text-align: center;
justify-content: center;
align-items: center;
margin: 20px 300px ;
height: 30px;
`
export default Categories;


