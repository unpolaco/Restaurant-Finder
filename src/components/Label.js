import styled from 'styled-components';

const AnimatedLabel = styled.label`
position: absolute;
top: 10px;
left: 50px;
color:  ${({ theme }) => theme.ghostWhite};
font-size: ${({ theme }) => theme.fontL};
pointer-events: none;
transition: 0.3s ease all;
z-index: 100;
`;

export { AnimatedLabel }