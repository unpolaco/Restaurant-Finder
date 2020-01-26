import React from 'react';
import styled from 'styled-components';


const Form = (props) => {

  return (
    <FormWrapper onSubmit={props.submit}>
      <Input 
        type="text" 
        id="searchInput" 
        value={props.value} 
        onChange={props.change} 
        placeholder= "Enter city name" 
      /> 
      <Button >Search</Button>
    </FormWrapper>
  )
}
const FormWrapper = styled.form`
display: flex;
/* border: 1px solid; */
/* height: 30px; */
font-size: 16px;
/* background-color: red; */
`
const Button = styled.button`
  cursor: pointer;
  /* background: transparent; */
  /* font-size: 1.4em; */
  color: #808588;
  border: #808588;
  /* margin: 0 1em; */
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: #808588;
  }
`;

const Input = styled.input`
  /* font-size: 1.4em; */
  border: solid 1px #dbdbdb;
  color: #262626;
  /* padding: 7px 33px; */
  /* border-radius: 3px; */
  color: #ffaf00;
  cursor: text;
  /* font-weight: 300; */
  /* text-align: center; */
  background: #fafafa;
  /* width: 20vw; */
  /* margin: 20px 0 ; */
  padding-left: 30px;
  width: 80%;
  
  &:active,
  &:focus {
    text-align: left;
  }
`;

export default Form;