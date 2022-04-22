import styled from "styled-components";

export const StyledTodoList = styled.div`
  max-height: 50vh;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;