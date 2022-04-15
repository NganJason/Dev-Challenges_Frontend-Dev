import React, {useState} from "react";
import "./styles/main.scss";

import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList"

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <header>
        <Nav theme={theme} setTheme={setTheme}/>
      </header>
      <main>
        <CardList/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
