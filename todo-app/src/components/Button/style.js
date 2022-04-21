import styled from "styled-components";

export const StyledButton = styled.div`
  width: ${(props) => (props.w ? props.w : 1)}rem;
  height: ${(props) => (props.h ? props.h : 0.5)}rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.button.primary.bg};
  color: ${(props) => props.theme.button.primary.color};

  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;


  
  