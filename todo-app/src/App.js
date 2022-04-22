import React, {useState} from "react"
import { lightTheme, darkTheme } from "./globalStyles/theme";

import { BaseStyles } from "./globalStyles/base";
import { Body, Header } from "./globalStyles/layout"
import Nav from "./components/Nav/Nav";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import Title from "./components/Title/Title";

import { ThemeProvider } from "styled-components";
import { TodosProvider } from "./hooks/toDosContext"
import { initThemeHandler } from "./handlers/themeHandler";

const themeHandler = initThemeHandler()

function App() {
  const [theme, setTheme] = useState(themeHandler.getTheme())
  const [page, setPage] = useState("all");

  const toggleTheme = () => {
    setTheme(themeHandler.toggleTheme())
  }

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <TodosProvider>
        <Body>
          <BaseStyles />
          <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
          <Header>
            <Title/>
          </Header>
          <main>
            <Nav setPage={setPage} page={page} />
            {page !== "completed" && <Input />}
            <TodoList
              page={page}
            />
          </main>
        </Body>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
