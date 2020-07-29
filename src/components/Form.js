import React from 'react';
import styled from 'styled-components';
import SelectCategories from './select_categories';
import categoryList from '../assets/category_list';
import { Input } from './input';
import { AnimatedLabel } from './label';
import { SubmitButton } from './button';

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