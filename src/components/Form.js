import React from 'react';
import styled from 'styled-components';
import SelectCategories from './Select_Categories';
import categoryList from '../assets/category_list';
import { Input } from './Input';
import { AnimatedLabel } from './Label';
import { SubmitButton } from './Button';

const Form = (props) => {
	return (
		<FormWrapper onSubmit={props.submit}>
			<Input
				required
				type='text'
				id='searchInput'
				name='city'
				autoComplete="off"
			/>
			<AnimatedLabel htmlFor='searchInput'>City name</AnimatedLabel>
			<SelectCategories
				categories={categoryList}
				name='category'
			></SelectCategories>
			<SubmitButton type='submit'>Find it!</SubmitButton>
		</FormWrapper>
	);
};
const FormWrapper = styled.form`
	position: relative;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	width: 650px;
`
export default Form;