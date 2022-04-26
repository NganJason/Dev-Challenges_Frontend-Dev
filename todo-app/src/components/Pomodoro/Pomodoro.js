import React, { useState, useEffect } from "react";
import { Text } from "../../globalStyles/typography";

const formatTime = (t) => {
  if (t === undefined) {
      return ""
  }
  
  let minutes = String(t.getMinutes()).padStart(2, 0);
  let seconds = String(t.getSeconds()).padStart(2, 0);

  return `${minutes}:${seconds}`;
};

let d = new Date();

function Pomodoro() {
    const [pomodoro, setPomodoro] = useState(undefined)
    
    useEffect(() => {
        d.setHours(0, 45, 0)
        setPomodoro(formatTime(d));
    }, [])

    const startPomodoro = () => {
        setInterval(() => {
          d.setSeconds(d.getSeconds() - 1);
          setPomodoro(formatTime(d));
        }, 1000);
    }

  return (
    <>
      <Text size="6" bd="600" center primary>
        {pomodoro}
      </Text>
      <button onClick={startPomodoro}>Click me</button>
    </>
  );
}

export default Pomodoro;
