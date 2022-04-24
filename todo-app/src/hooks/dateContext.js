import React, { useState, useEffect } from "react";
import { initDateHandler } from "../handlers/dateHandler";

export const DateContext = React.createContext();
const dateHandler = initDateHandler();

export function DateProvider({ children }) {
  const [date, setDate] = useState(dateHandler.getDate());
  const [time, setTime] = useState(dateHandler.getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(dateHandler.getTime());
    }, 1);
  }, []);

  const addDate = (day) => {
    let d = new Date(dateHandler.addDay(day).getTime());
    setDate(d);
  };

  const value = { date, setDate, time, setTime, addDate };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}
