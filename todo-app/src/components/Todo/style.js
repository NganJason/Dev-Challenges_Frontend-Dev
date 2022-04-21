import styled from "styled-components";

export const StyledTodo = styled.div`
  width: 46rem;
  margin: auto;
  margin-top: 1.5rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.8rem;

  border: 1px solid ${(props) => props.theme.border.checkbox};
  border-radius: 4px;
  cursor: pointer;


`;

export const DeleteIcon = styled.span`
  width: 2rem;

  display: ${(props) => (props.disable ? "none" : "block")};

  color: ${(props) => props.theme.icon.primary};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;