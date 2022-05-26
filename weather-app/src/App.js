import React, {useState, useEffect} from "react"
import "./styles/main.scss"

import SideMenu from "./components/SideMenu/SideMenu";
import Dashboard from "./components/Dashboard/Dashboard";
import MetaWeather from "./model/metaweather";

function App() {
  const [modalDisabled, setModalDisabled] = useState(true);

  useEffect(() => {
    let weather = new MetaWeather()
    let data = weather.get_countries("Lon")
  })

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
