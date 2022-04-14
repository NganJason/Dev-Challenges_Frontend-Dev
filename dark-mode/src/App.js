import React, {useState} from "react"

import Dashboard from "./components/Dashboard/Dashboard"

import "./styles/main.scss"

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={`app ${theme === "light" ? "light" : "dark"}`}>
        <Dashboard 
          theme={theme}
          toggleTheme={toggleTheme}
        />
    </div>
  );
}

export default App;
