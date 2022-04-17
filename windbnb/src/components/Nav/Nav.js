import React from "react"

import logo from "../../assets/logo.png"
function Nav({ theme, setTheme, toggleModal }) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="nav">
      <div className="nav__bar">
        <img src={logo} alt="logo" />
        <span
          className="material-icons md-24 hover-lg primary"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "light_mode" : "dark_mode"}
        </span>
      </div>

      <div className="nav__search box">
        <div
          className="search__location border-right hover-lg"
          onClick={toggleModal}
        >
          <h3 className="bd-400 mulish default">Helsinki, Finland</h3>
        </div>
        <div
          className="search__guests border-right hover-lg"
          onClick={toggleModal}
        >
          <h3 className="bd-400 mulish light">Add guests</h3>
        </div>
        <span className="search__btn material-icons md-24 default hover-lg">
          search
        </span>
      </div>
    </div>
  );
}

export default Nav;