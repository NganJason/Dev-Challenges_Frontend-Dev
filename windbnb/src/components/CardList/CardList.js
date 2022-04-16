import React from "react"

import Card from "../Card/Card"
function CardList() {
    return (
      <div>
        <div className="cardlist__header">
          <h1>Stays in Finland</h1>
          <p>12+ stays</p>
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