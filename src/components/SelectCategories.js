import React from 'react';
import styled from 'styled-components';


const SelectCategories = (props) => {
  return (
    <Select  onChange={props.onChangeCategory}>
        <Option disabled value={"Choose your favourite cousine"} > Choose your favourite cousine </Option>
        {props.categories.map(category => <Option key={category.id}>{category.name}</Option>)}
    </Select>
  )
}
const Select = styled.select`
  color: ${({ theme }) => theme.ghostWhite};
  cursor: pointer;
  background-color: ${({ theme }) => theme.amber500};
  padding: 3px 20px 3px 20px;
  width: 300px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontL};
  border-radius: 20px; 
  border: none;
  outline-color: #fff; 
`
const Option = styled.option`
  color: ${({ theme }) => theme.amber800};
  background-color: ${({ theme }) => theme.ghostWhite};
`

export default SelectCategories;


