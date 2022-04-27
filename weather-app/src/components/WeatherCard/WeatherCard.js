import React from "react";
import Text from "../Text/Text"

import shower from "../../images/Shower.png"

function WeatherCard() {
  return (
    <div className="weather-card bg-secondary">
      <Text size={1} align="center" primary>
        Tomorrow
      </Text>
      <img className="card__img" src={shower} />
      <div className="card__temp">
        <Text size="20px" mgRight="1">
          16
          <Text size="14px" inline color="secondary">
            <span>&#8451;</span>
          </Text>
        </Text>
        <Text size="20px" mgLeft="1">
          11
          <Text size="14px" inline color="secondary">
            <span>&#8451;</span>
          </Text>
        </Text>
      </div>
    </div>
  );
}

export default WeatherCard;
