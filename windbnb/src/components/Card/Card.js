import React from "react"

function Card({stayInfo}) {
    return (
      <div className="card">
        <img src={stayInfo.photo} alt="property" />

        <div className="card__tag-list">
          <div className="tag__super-host box">
            {stayInfo.superHost ? <h4 className="bd-700 txt-center">SUPER HOST</h4> : ""}
          </div>

          <h3 className="bd-500 secondary">{stayInfo.type}</h3>

          <div className="tag__rating">
            <span className="material-icons md-24 default">star</span>
            <h3 className="bd-500 primary">{stayInfo.rating}</h3>
          </div>
        </div>

        <p className="card__name bd-600">
          {stayInfo.title}
        </p>
      </div>
    );
}

export default Card