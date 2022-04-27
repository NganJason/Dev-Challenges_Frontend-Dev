import React from "react";
import Text from "../Text/Text";

function HighlightCard({title, value, unit, children}) {
  return (
    <div className="card bg-secondary">
      <Text size="20px" primary>
        {title}
      </Text>
      <Text size="64px" bd="700" mgTop="1.5" primary>
        {value}
        <Text size="40px" mgLeft="1" inline>
          {unit}
        </Text>
      </Text>
      <div className="card__children">
        {children}
      </div>
    </div>
  );
}

export default HighlightCard;
