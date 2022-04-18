import React, {useState} from "react";
import {StayData} from "./handlers/dataHandler"

import "./styles/main.scss";

import Nav from "./components/Nav/Nav";
import CardList from "./components/CardList/CardList"
import Modal from "./components/Modal/Modal";

function App() {
  const stayData = new StayData()
  const [theme, setTheme] = useState("light")
  const [modalOn, setModal] = useState(false)
  const [stays, setStays] = useState(stayData.GetData())
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");

  const toggleModal = () => {
    setModal(!modalOn)
  }

  const searchHandler = () => {
    stayData.FilterGuest(guests)
    stayData.FilterLocation(location)

    setStays(stayData.GetData());
  };

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""} bg-primary`}>
      <header>
        <Nav
          theme={theme}
          setTheme={setTheme}
          toggleModal={toggleModal}
          guests={guests}
          location={location}
          searchHandler={searchHandler}
        />
      </header>
      <main>
        <CardList data={stays} />
        {modalOn ? (
          <Modal
            toggleModal={toggleModal}
            setStays={setStays}
            guests={guests}
            location={location}
            setGuests={setGuests}
            setLocation={setLocation}
            searchHandler={searchHandler}
          />
        ) : (
          ""
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
