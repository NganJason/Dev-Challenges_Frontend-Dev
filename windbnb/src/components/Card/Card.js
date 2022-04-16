import React from "react"

function Card() {
    const img =
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80";

    return (
      <div className="card">
        <img src={img} alt="property" />

        <div className="card__tag-list">
          <div className="tag__super-host box">
            SUPER HOST
          </div>

          <p className="tag__info">Entire apartment . 2 beds</p>

          <div className="tag__rating">
            <span class="material-icons md-18 default rating__star">star</span>
            <p className="rating__text">4.40</p>
          </div>
        </div>

        <h3 className="card__name">Stylist apartment in center of the city</h3>
      </div>
    );
}

export default Card