import React, {useContext} from "react";
import { TodosContext } from "../../hooks/toDosContext";

import { StyledTodoList } from "./style";
import Todo from "../Todo/Todo";

function TodoList({ page }) {
  const {todos} = useContext(TodosContext);

  const genTodos = () => {
    let filteredTodos = [...todos];

    if (page === "completed") {
      filteredTodos = filteredTodos.filter((todo) => todo.done);
    }

    if (page === "active") {
      filteredTodos = filteredTodos.filter((todo) => !todo.done);
    }

    return filteredTodos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          page={page}
          todo={todo}
        />
      );
    });
  };

  return <StyledTodoList>{genTodos()}</StyledTodoList>;
}

export default TodoList;
