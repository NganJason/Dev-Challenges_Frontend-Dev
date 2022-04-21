import { localStorageDM } from "../dm/localStorage";

export const initThemeHandler = () => {
    let localStorage = new localStorageDM("themeStorage")
    let themeHandler = new Themehandler(localStorage);

    return themeHandler
}

class Themehandler {
    constructor(themeDM) {
        this.theme = themeDM.get()
        this.themeDM = themeDM

        if (this.theme !== "light" && this.theme!=="dark") {
            this.theme = "light"
        }
    }

    getTheme() {
        return this.theme
    }

    toggleTheme() {
        this.theme = this.theme === "light" ? "dark" : "light"
        this.themeDM.save(this.theme)
        return this.theme
    }
}