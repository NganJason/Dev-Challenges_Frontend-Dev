import React from "react"

function Modal() {
    return (
      <div className="modal">
        <div className="modal__form">
          <div className="modal__input">
            <div className="input__item border-right">
              <p className="input__label">LOCATION</p>
              <p className="input__placeholder">Add location</p>
            </div>
            <div className="input__item border-right">
              <p className="input__label">GUESTS</p>
              <p className="input__placeholder">4 guests</p>
            </div>
            <div className="modal__search-btn">
              <button>
                <span class="material-icons md-24  hover-lg">search</span>
                <p>Search</p>
              </button>
            </div>
          </div>

          <div className="input__selection">
            <div className="selection__location"></div>
            <div className="selection__guest"></div>
          </div>
        </div>
      </div>
    );
}

export default Modal;