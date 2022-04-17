import React from "react"

function Card() {
    const img =
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80";

    return (
      <div className="card">
        <img src={img} alt="property" />

        <div className="card__tag-list">
          <div className="tag__super-host box">
            <h4 className="bd-700 txt-center">SUPER HOST</h4>
          </div>

          <h3 className="bd-500 secondary">Entire apartment . 2 beds</h3>

          <div className="tag__rating">
            <span className="material-icons md-24 default">star</span>
            <h3 className="bd-500 primary">4.40</h3>
          </div>
        </div>

        <p className="card__name bd-600">
          Stylist apartment in center of the city
        </p>
      </div>
    );
}

export default Card