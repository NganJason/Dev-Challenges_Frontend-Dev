import React from "react"

import logo from "../../assets/logo.png"
function Nav({theme, setTheme}) {
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
      <div className="nav">
        <div className="nav__bar">
          <img src={logo} alt="logo" />
          <span
            class="material-icons md-24 mode-icon hover-lg"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </div>

        <div className="nav__search box">
          <div className="search__location border-right hover-lg">
            <p className="input__text">Helsinki, Finland</p>
          </div>
          <div className="search__guests border-right hover-lg">
            <p className="input__placeholder">Add guests</p>
          </div>
          <span class="search__btn material-icons md-18 default hover-lg">
            search
          </span>
        </div>
      </div>
    );
}

export default Nav;