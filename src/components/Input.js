import styled from 'styled-components';

const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.amber500};
	color: ${({ theme }) => theme.ghostWhite};
	cursor: text;
	background-color: ${({ theme }) => theme.amber500};
	padding: 3px 3px 3px 30px;
	width: 200px;
	height: 40px;
	font-size: ${({ theme }) => theme.fontL};
	border-radius: 20px;
	outline-color: #fff;
	&:focus,
	:valid {
		border: 1px solid ${({ theme }) => theme.amber500};
	}
	&:focus ~ label,
	:valid ~ label {
		top: -20px;
		left: 30px;
		font-size: ${({ theme }) => theme.fontS};
		color: ${({ theme }) => theme.amber500};
	}
`;

export { Input };
