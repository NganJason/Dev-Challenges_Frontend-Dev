import React from "react";
import Todo from "../Todo/Todo";
import { StyledTodoList } from "./style";

function TodoList({ page, todos, toggleDone, deleteTodo }) {
  const genTodos = () => {
    let filteredTodos = [...todos];

    if (page === "completed") {
      filteredTodos = filteredTodos.filter((todo) => todo.done);
    }

    if (page === "active") {
      filteredTodos = filteredTodos.filter((todo) => !todo.done);
    }

    return filteredTodos.map((todo, i) => {
      return (
        <Todo
          key={i}
          page={page}
          todo={todo}
          idx={i}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      );
    });
  };
  return <StyledTodoList>{genTodos()}</StyledTodoList>;
}

export default TodoList;
