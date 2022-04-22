import styled from "styled-components";

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

  display: block;

  color: ${(props) => props.theme.icon.primary};
  cursor: pointer;
  opacity: 0;

  &:hover {
    transform: scale(1.1);
  }
`;

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

  &:hover ${DeleteIcon} {
    opacity: 100;
  }
`;

export const StyledContent = styled.input`
  font-family: ${(props) => (props.Raleway ? "Raleway" : "Montserrat")},
    sans-serif;
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.bd};
  text-decoration: ${(props) => (props.strike ? "line-through" : "")};

  background-color: inherit;
  color: ${(props) => {
    if (props.primary) {
      return props.theme.text.primary;
    }
  }};
  border: none;

  &:focus {
    outline: none;
  }
`;