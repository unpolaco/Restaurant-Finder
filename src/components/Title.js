import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
font-family: 'Ibarra Real Nova', serif;
font-size: ${({ theme }) => theme.fontXl};
text-align: left;
z-index: 11;
`;

export { Title };
