import React, {useState} from "react"
import { lightTheme, darkTheme } from "./globalStyles/theme";

import { ThemeProvider } from "styled-components";
import { BaseStyles } from "./globalStyles/base";
import { Body, Header } from "./globalStyles/layout"
import { Text } from "./globalStyles/typography"
import Nav from "./components/Nav/Nav";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";


function App() {
  const [theme, setTheme] = useState("light")
  const [page, setPage] = useState("all");

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const toggleDone = (idx) => {
    let newTodos = [...todos]

    newTodos[idx].done = !newTodos[idx].done
    setTodos(newTodos)
  }

  const deleteTodo = (idx) => {
    let newTodos = [...todos]

    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }

  const toggleTheme = () => {
    setTheme(theme  === "light" ? "dark" : "light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Body>
        <BaseStyles />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme}/>
        <Header>
          <Text size="2.5" bd="700" center Raleway primary>
            #todo
          </Text>
        </Header>
        <main>
          <Nav setPage={setPage} page={page} />
          {page !== "completed" ? <Input addTodo={addTodo} /> : ""}
          <TodoList
            page={page}
            todos={todos}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        </main>
      </Body>
    </ThemeProvider>
  );
}

export default App;
