import styled from "styled-components";

export const StyledNav = styled.div`
  max-width: 608px;
  margin: auto;

  display: flex;
  justify-content: center;

  border-bottom: 1px solid ${(props) => props.theme.border.primary};

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const NavItem = styled.div`
  padding-bottom: 1rem;
  
  border-bottom: ${(props) => (props.active ? `2px solid ${props.theme.border.secondary}` : "")};
  cursor: pointer;
`;