import styled from 'styled-components';

const SubmitButton = styled.button`
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.amber600};
  border-radius: 50%;
  height: 80px;
  width: 80px; 
  font-size: ${({ theme }) => theme.fontL};
  color: ${({ theme }) => theme.amber600};
  background-color: ${({ theme }) => theme.ghostWhite};
  outline-color: ${({ theme }) => theme.transparent}; 
  transition: 0.5s all ease-out;
  &:hover {
    color: ${({ theme }) => theme.ghostWhite};
    background-color: ${({ theme }) => theme.amber600};
  }
`
export { SubmitButton }
