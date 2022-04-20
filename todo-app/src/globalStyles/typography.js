import styled from "styled-components";

export const Text = styled.p`
  font-family: ${(props) => (props.Raleway ? "Raleway" : "Montserrat")},
    sans-serif;
  line-height: 1.25rem;

  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.bd};

  text-align: ${(props) => {
    if (props.center) {
      return "center";
    } else if (props.right) {
      return "right";
    } else {
      return "left";
    }
  }};

  color: ${(props) => {
    if (props.primary) {
      return props.theme.text.primary;
    }
  }};
`;
