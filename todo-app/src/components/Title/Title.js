import React, { useContext } from "react";
import { Text } from "../../globalStyles/typography";
import { StyledTitle, Arrow, DateSelection } from "./style";
import { DateContext } from "../../hooks/dateContext";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (d) => {
  return `${d.getDate()} ${months[d.getMonth()]}`;
};

const formatTime = (t) => {
  let minutes = String(t.getMinutes()).padStart(2, 0);

  return `${t.getHours()}:${minutes}`;
}

function Title() {
  const { date, time, addDate } = useContext(DateContext);

  return (
    <StyledTitle>
      <Text size="6" bd="600" center primary>
        {formatTime(time)}
      </Text>
      <DateSelection>
        <Arrow
          className="material-icons"
          primary
          onClick={() => {
            addDate(-1);
          }}
        >
          chevron_left
        </Arrow>
        <Text size="1" bd="600" center primary>
          {formatDate(date)}
        </Text>
        <Arrow
          className="material-icons"
          primary
          onClick={() => {
            addDate(1);
          }}
        >
          chevron_right
        </Arrow>
      </DateSelection>
    </StyledTitle>
  );
}

export default Title;
