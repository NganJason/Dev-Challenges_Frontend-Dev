import styled, { keyframes } from "styled-components";


const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 100;
  }
`;

export const Arrow = styled.span`
  opacity: 0;
  color: ${(props) => {
    if (props.primary) {
      return props.theme.text.primary;
    }
  }};

  width: 2rem;
`;

export const StyledTitle = styled.div`
  width: auto;
  margin: auto;

  display: flex;
  flex-direction: column;

  cursor: pointer;
  animation: ${fadein} 0.7s ease-in;
`

export const DateSelection = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;

  &:hover ${Arrow} {
    opacity: 100;

    animation: ${fadein} 0.2s ease-in;
  }
`;