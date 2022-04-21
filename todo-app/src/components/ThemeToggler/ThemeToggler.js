import React from "react";
import { StyledThemeToggler } from "./style"

function ThemeToggler({theme, toggleTheme}) {
  return (
    <StyledThemeToggler className="material-icons" onClick={toggleTheme}>
      {theme === "light" ? "dark_mode" : "light_mode"}
    </StyledThemeToggler>
  );
}

export default ThemeToggler;
