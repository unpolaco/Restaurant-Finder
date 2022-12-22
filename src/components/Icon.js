import styled from 'styled-components';

const Icon = styled.button`
width: 40px;
height: 40px;
background-image: url(${({icon}) => icon});
background-repeat: no-repeat;
background-size: cover;

background-color: transparent;
border: none;
`
export default Icon;
