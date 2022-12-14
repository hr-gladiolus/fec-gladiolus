import styled from 'styled-components';

const HelpfulButton = styled.button`
background-color: white;
border-width: 0;
display: flex;
flex-direction: row;
font-size: 11px;
place-content: center;
opacity: 85%;
text-decoration: underline;
margin 0 5px;
background-color:${({ theme }) => theme.bg};
`;

export default HelpfulButton;
