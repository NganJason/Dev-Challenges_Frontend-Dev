import React from "react";
import { StyledTitle } from "./style";
import Clock from "../Clock";
import Pomodoro from "../Pomodoro";

function Title() {
  return (
    <StyledTitle>
      <Pomodoro></Pomodoro>
    </StyledTitle>
  );
}

export default Title;
