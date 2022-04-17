import React, {useState, useEffect} from "react"

function Modal({ toggleModal }) {
  const [inputType, setInputType] = useState("")

  const LOCATION = "location";
  const NUM_GUEST = "num_guests";
  
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  const setInput = (e) => {
    setInputType(e.currentTarget.id)
  }

  useEffect(() => {
    console.log(inputType)
  }, [inputType])
  
  return (
    <div className="modal bg-secondary" onClick={toggleModal}>
      <div className="modal__form bg-primary" onClick={stopPropagation}>
        <div className="box container">
          <div className="input border-right">
            <div id={LOCATION} className="input__field" onClick={setInput}>
              <h6 className="bd-800 mulish">LOCATION</h6>
              <h3 className="bd-400 mulish light">Add location</h3>
            </div>

            <div
              className={`input__drop-down selection__location ${
                inputType === LOCATION ? "" : "display-none"
              }`}
            >
              <div>
                <span className="material-icons md-24 tertiary">place</span>
                <h3 className="bd-400">Helsinki, Finland</h3>
              </div>
              <div>
                <span className="material-icons md-24 tertiary">place</span>
                <h3 className="bd-400">Turku, Finland</h3>
              </div>
              <div>
                <span className="material-icons md-24 tertiary">place</span>
                <h3 className="bd-400">Oulu, Finland</h3>
              </div>
              <div>
                <span className="material-icons md-24 tertiary">place</span>
                <h3 className="bd-400">Vaasa, Finland</h3>
              </div>
            </div>
          </div>

          <div className="input">
            <div
              id={NUM_GUEST}
              className="input__field guests"
              onClick={setInput}
            >
              <h6 className="bd-800 mulish">GUESTS</h6>
              <h3 className="bd-400 mulish light">4 guests</h3>
            </div>

            <div
              className={`input__drop-down selection__guests ${
                inputType === NUM_GUEST ? "" : "display-none"
              }`}
            >
              <div>
                <h3 className="bd-700">Adults</h3>
                <h3 className="bd-400 light">Ages 13 or above</h3>
                <div className="guests__btn">
                  <button className="secondary">-</button>
                  <h3 className="bd-700 secondary txt-center">0</h3>
                  <button className="secondary">+</button>
                </div>
              </div>

              <div>
                <h3 className="bd-700">Children</h3>
                <h3 className="bd-400 light">Ages 2 - 12</h3>
                <div className="guests__btn">
                  <button className="secondary">-</button>
                  <h3 className="bd-700 secondary txt-center">0</h3>
                  <button className="secondary">+</button>
                </div>
              </div>
            </div>
          </div>

          <button className="modal__search-btn primary">
            <span className="material-icons md-24 secondary hover-lg">search</span>
            <h3 className="bd-700 mulish tertiary">Search</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;