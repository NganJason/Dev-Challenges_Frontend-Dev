import React from "react"

import Card from "../Card/Card"

function CardList({data}) {
    return (
      <div>
        <div className="cardlist__header">
          <h1 className="bd-700">Stays in Finland</h1>
          <h3 className="bd-500 primary">{`${data.length} stays`}</h3>
        </div>
        <div className="cardlist">
        {data.map((info) => {
          return <Card key={info.title} stayInfo={info} />;
        })}
          
        </div>
      </div>
    );
}

export default CardList