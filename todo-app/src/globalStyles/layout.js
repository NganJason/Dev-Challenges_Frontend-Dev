import styled from "styled-components";

export const Body = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.background.global};
`;

export const Header = styled.div`
  display: flex;
  min-height: 3rem;
  padding: 3rem;
`;
