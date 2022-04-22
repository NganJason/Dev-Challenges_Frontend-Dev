import React, { useState, useEffect } from "react";
import { Text } from "../../globalStyles/typography";
import { StyledTitle } from "./style"

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

const getDateTime = () => {
  return {
    date: getDate(),
    time: getTime(),
  };
};

const getDate = () => {
  let d = new Date();
  return `${d.getDate()} ${months[d.getMonth()]}`;
};

const getTime = () => {
  let d = new Date();
  let minutes = String(d.getMinutes()).padStart(2, 0);

  return `${d.getHours()}:${minutes}`;
};

function Title() {
    const [dateTime, setDateTime] = useState(getDateTime())

    useEffect(() => {
      setInterval(()=> {
        setDateTime(getDateTime())
      }, 1)
    }, [])

  return (
    <StyledTitle>
      <Text size="6" bd="600" center primary>
        {dateTime.time}
      </Text>
      <Text size="1" bd="600" mgtop="1" center primary>
        {dateTime.date}
      </Text>
    </StyledTitle>
  );
}

export default Title;
