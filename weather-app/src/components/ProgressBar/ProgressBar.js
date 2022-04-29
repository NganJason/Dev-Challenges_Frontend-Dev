import React from "react";
import Text from "../Text/Text";

function ProgressBar({
    width, 
    height, 
    progress,
    mgTop,
    mgBtm,
    mgLeft,
    mgRight,
}) {
    const ProgressBarStyles = {
      width: `${width ? `${width}` : "200px"}`,
      marginTop: `${mgTop ? `${mgTop}rem` : ""}`,
      marginBottom: `${mgBtm ? `${mgBtm}rem` : ""}`,
      marginLeft: `${mgLeft ? `${mgLeft}rem` : ""}`,
      marginRight: `${mgRight ? `${mgRight}rem` : ""}`,
    };

    const ProgressStyles = {
      width: `${progress ? `${progress}%` : "0%"}`,
      height: `${height ? `${height}` : "8px"}`,
    };

  return (
    <div style={ProgressBarStyles} className="progress-bar">
      <div className="bar-value">
        <Text>0</Text>
        <Text>50</Text>
        <Text>100</Text>
      </div>
      <div className="bar">
        <div style={ProgressStyles}  className="progress"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
