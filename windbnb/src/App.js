import React, {useState} from "react";
import "./styles/main.scss";

import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList"
import Modal from "./components/Modal/Modal";

function App() {
  const [theme, setTheme] = useState("light")
  const [modalOn, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modalOn)
  }

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""} bg-primary`}>
      <header>
        <Nav theme={theme} setTheme={setTheme} toggleModal={toggleModal} />
      </header>
      <main>
        <CardList />
        {modalOn ? <Modal toggleModal={toggleModal} /> : ""}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
