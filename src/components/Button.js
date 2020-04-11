import styled from 'styled-components';

const SubmitButton = styled.button`
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.amber500};
  border-radius: 50%;
  height: 80px;
  width: 80px; 
  font-size: ${({ theme }) => theme.fontL};
  color: ${({ theme }) => theme.amber500};
  background-color: ${({ theme }) => theme.ghostWhite};
  outline-color: #fff; 
  transition: 0.5s all ease-out;
  &:hover {
    color: ${({ theme }) => theme.ghostWhite};
    background-color: ${({ theme }) => theme.amber500};
  }
`
export { SubmitButton }
