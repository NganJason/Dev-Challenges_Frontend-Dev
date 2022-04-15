import React, {useState} from "react";
import "./styles/main.scss";

import Nav from "./components/Nav/Nav";

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <header>
        <Nav theme={theme} setTheme={setTheme}/>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
