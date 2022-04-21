import React from "react";
import { Text } from "../../globalStyles/typography";
import { StyledButton } from "./style";

function Button(props) {
  return (
    <StyledButton {...props} onClick={props.onClick}>
      <Text size="0.9" bd="600" center>
        {props.children}
      </Text>
    </StyledButton>
  );
}

export default Button;
