import styled from "styled-components";

export const Body = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;

  background-color: ${(props) => props.theme.background.global};
`;

export const Header = styled.div`
  display: flex;
  padding: 3rem;
`;
