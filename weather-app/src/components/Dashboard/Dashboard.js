import React from "react"
import Button from "../Button/Button";
import Weathers from "../Weathers/Weathers";

function Dashboard() {
    return (
      <div className="dashboard">
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
      </div>
    );
}

export default Dashboard;