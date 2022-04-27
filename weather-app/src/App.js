import React from "react"
import "./styles/main.scss"

import SideMenu from "./components/SideMenu/SideMenu";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App dark bg-primary">
      <SideMenu/>
      <Dashboard/>
    </div>
  );
}

export default App;
