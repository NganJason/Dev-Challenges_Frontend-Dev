import React from "react";
import { StyledThemeToggler } from "./style"

function ThemeToggler({theme, toggleTheme}) {
  return (
    <StyledThemeToggler className="material-icons" onClick={toggleTheme}>
      {theme === "dark" ? "light_mode" : "dark_mode"}
    </StyledThemeToggler>
  );
}

export default ThemeToggler;
