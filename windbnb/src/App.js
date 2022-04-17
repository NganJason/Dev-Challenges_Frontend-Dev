import React, {useState} from "react";
import "./styles/main.scss";

import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList"
import Modal from "./components/Modal/Modal";

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <header>
        <Nav theme={theme} setTheme={setTheme}/>
      </header>
      <main>
        <CardList/>
        <Modal/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
