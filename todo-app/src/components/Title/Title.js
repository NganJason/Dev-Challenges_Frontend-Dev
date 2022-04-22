import React from "react";
import { Text } from "../../globalStyles/typography";
import { StyledTitle } from "./style"

function Title() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const getDate = () => {
        let d = new Date()
        return `${d.getDate()} ${months[d.getMonth()]}`
    }

    const getTime = () => {
        let d = new Date()
        let minutes = String(d.getMinutes()).padStart(2, 0)

        return `${d.getHours()}:${minutes}`
    }
  return (
    <StyledTitle>
      <Text size="6" bd="600" center primary>
        {getTime()}
      </Text>
      <Text size="1" bd="600" mgtop="1" center primary>
        {getDate()}
      </Text>
    </StyledTitle>
  );
}

export default Title;
