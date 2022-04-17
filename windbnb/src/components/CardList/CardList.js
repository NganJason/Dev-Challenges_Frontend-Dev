import React from "react"

import Card from "../Card/Card"
function CardList() {
    return (
      <div>
        <div className="cardlist__header">
          <h1 className="bd-700">Stays in Finland</h1>
          <h3 className="bd-500 primary">12+ stays</h3>
        </div>

        <div className="cardlist">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
}

export default CardList