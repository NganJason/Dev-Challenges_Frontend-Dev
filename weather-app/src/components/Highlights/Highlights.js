import React from "react";
import Text from "../Text/Text"
import HighlightCard from "../HighlightCard/HighlightCard";
import ProgressBar from "../ProgressBar/ProgressBar";

function Highlights() {
  return (
    <div className="highlights">
      <Text size="1.5rem" bd="700" primary>
        Today's Highlights
      </Text>
      <div className="highlights__cardlist">
        <HighlightCard title="Wind Status" value="7" unit="mph">
          <Text mgTop="1.5" inline>
            <span class="material-icons md-18 card-icon primary">
              navigation
            </span>
            WSW
          </Text>
        </HighlightCard>

        <HighlightCard title="Humidity" value="84" unit="%">
          <ProgressBar width="70%" progress="84" mgTop="1"/>
        </HighlightCard>

        <HighlightCard
          title="Visibility"
          value="6.4"
          unit="miles"
        />

        <HighlightCard
          title="Air Pressure"
          value="998"
          unit="mb"
        />
      </div>
    </div>
  );
}

export default Highlights;
