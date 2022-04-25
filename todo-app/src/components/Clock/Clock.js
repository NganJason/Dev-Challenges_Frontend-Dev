import React, { useContext, useState, useEffect } from "react";
import { Text } from "../../globalStyles/typography";
import { Arrow, DateSelection } from "./style";
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
};

function Clock() {
  const { dateObj, addDate } = useContext(DateContext);
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let timeObj = new Date();
      setTime(formatTime(timeObj));
    }, 1);
  }, []);

  return (
    <>
      <Text size="6" bd="600" center primary>
        {time}
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
          {formatDate(dateObj)}
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
    </>
  );
}

export default Clock;
