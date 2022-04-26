import React from "react";

function Text({
  align, 
  size, 
  color,
  mgTop,
  mgBtm,
  mgLeft,
  mgRight,
  children
}) {
  const styles = {
    textAlign: `${align ? align : "left"}`,
    fontSize: `${size ? `${size}rem` : "1rem"}`,
    marginTop: `${mgTop ? `${mgTop}rem` : "0"}`,
    marginBottom: `${mgBtm ? `${mgBtm}rem` : "0"}`,
    marginLeft: `${mgLeft ? `${mgLeft}rem` : "0"}`,
    marginRight: `${mgRight ? `${mgRight}rem` : "0"}`,
  };

  const classNames = `
  text ${color ? color : "primary"}
`;

  return (
    <p className={classNames} style={styles}>{children}</p>
  );
}

export default Text;
