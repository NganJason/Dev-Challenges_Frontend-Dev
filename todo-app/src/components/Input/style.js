import styled from "styled-components";

export const StyledForm = styled.div`
  width: 46rem;
  margin: 2rem auto;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const StyledInput = styled.input`
  height: 3.5rem;
  width: 38rem;
  padding-left: 1rem;

  display: block;

  border: 1px solid ${(props) => props.theme.border.primary};
  border-radius: 12px;

  font-family: "Montserrat";
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.text.secondary};
  
  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    width: 75%;
  }
`;