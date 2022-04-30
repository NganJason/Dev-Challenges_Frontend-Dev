import React, {useState} from "react"
import "./styles/main.scss"

import SideMenu from "./components/SideMenu/SideMenu";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [modalDisabled, setModalDisabled] = useState(true);

  const toggleModal = () => {
    setModalDisabled(!modalDisabled);
  };

  const closeModal = () => {
    setModalDisabled(true)
  }

  return (
    <div className="App dark bg-primary">
      <SideMenu modalDisabled={modalDisabled} toggleModal={toggleModal} />
      <Dashboard closeModal={closeModal}/>
    </div>
  );
}

export default App;
