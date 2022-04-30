import React from "react"
import Button from "../Button/Button";
import Highlights from "../Highlights/Highlights";
import Weathers from "../Weathers/Weathers";

function Dashboard({closeModal}) {
    return (
      <div className="dashboard" onClick={closeModal}>
        <div className="dashboard__header">
          <div></div>
          <Button size="sm" align="right" mgRight={1} round active>
            <span className="header__degree">&#8451;</span>
          </Button>

          <Button size="sm" align="right" mgRight={1} round>
            <span className="header__degree">&#8457;</span>
          </Button>
        </div>

        <Weathers/>
        <Highlights/>
      </div>
    );
}

export default Dashboard;