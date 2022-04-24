import React, { useState } from "react";
import { initDateHandler } from "../handlers/dateHandler";

export const DateContext = React.createContext();
const dateHandler = initDateHandler();

export function DateProvider({ children }) {
  const [dateObj, setDateObj] = useState(dateHandler.getDate());

  const addDate = (day) => {
    let d = new Date(dateHandler.addDay(day).getTime());
    setDateObj(d);
  };

  const value = { dateObj, setDateObj, addDate };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}
