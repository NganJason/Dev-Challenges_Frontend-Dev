import styled, { keyframes } from "styled-components";


const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 100;
  }
`;

export const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${fadein} 0.7s ease-in;
`