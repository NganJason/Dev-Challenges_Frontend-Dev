import styled from "styled-components";

export const StyledThemeToggler = styled.span`
  width: 2rem;
  position: absolute;
  right: 2rem;
  top: 1rem;

  font-size: 2rem;
  color: ${props => props.theme.icon.mode};
  cursor: pointer;
`;