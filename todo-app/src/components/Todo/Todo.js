import React from "react";
import { Text } from "../../globalStyles/typography";
import { Checkbox, StyledTodo, DeleteIcon } from "./style";

function Todo({ page, todo, idx, toggleDone, deleteTodo, ...props }) {
  const toggleCheckbox = () => {
    toggleDone(idx);
  }

  const deleteHandler = () => {
    deleteTodo(idx)
  }

  return (
    <StyledTodo>
      <Checkbox type="checkbox" checked={todo.done} {...props} onChange={toggleCheckbox} />
      <Text size="1.1" bd="500" strike={todo.done} primary>
        {todo.content}
      </Text>
      <DeleteIcon className="material-icons" onClick={deleteHandler} disable={page !== "completed"}>
        delete_outline
      </DeleteIcon>
    </StyledTodo>
  );
}

export default Todo;
