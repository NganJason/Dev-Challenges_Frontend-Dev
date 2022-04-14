import React from "react"

function Dashboard({theme, toggleTheme}) {
    const mode = {
        "light": "light_mode",
        "dark": "dark_mode"
    }

    return (
      <div className="dashboard">
        <span 
            class="material-icons header"
            onClick={toggleTheme}
        >
            {mode[theme]}
        </span>
        <h1 className="header">Hello there</h1>
        <h3 className="text">I'm Jason</h3>
      </div>
    );
}

export default Dashboard;