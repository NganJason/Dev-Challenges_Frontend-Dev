import React from "react";

function Text({
  align, 
  size, 
  color,
  mgTop,
  mgBtm,
  mgLeft,
  mgRight,
  inline,
  children
}) {
  const styles = {
    textAlign: `${align ? align : "left"}`,
    fontSize: `${size ? `${size}rem` : "1rem"}`,
    marginTop: `${mgTop ? `${mgTop}rem` : ""}`,
    marginBottom: `${mgBtm ? `${mgBtm}rem` : ""}`,
    marginLeft: `${mgLeft ? `${mgLeft}rem` : ""}`,
    marginRight: `${mgRight ? `${mgRight}rem` : ""}`,
  };

  const classNames = `
  text 
  ${color ? color : "primary"}
  ${inline ? "inline" : ""}
`;

  return (
    <p className={classNames} style={styles}>{children}</p>
  );
}

export default Text;
