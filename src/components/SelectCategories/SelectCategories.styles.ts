import styled from "styled-components";

export const Select = styled.select`
color: ${({ theme }) => theme.ghostWhite};
cursor: pointer;
background-color: ${({ theme }) => theme.amber600};
padding: 3px 20px 3px 20px;
width: 300px;
height: 40px;
font-size: ${({ theme }) => theme.fontL};
border-radius: 20px;
border: none;
outline-color: ${({ theme }) => theme.transparent};
border: 1px solid ${({ theme }) => theme.amber600};
&:hover {
  background-color: ${({ theme }) => theme.amber600};
  color: ${({ theme }) => theme.ghostWhite};
}
`;
export const Option = styled.option``;