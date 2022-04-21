import React, {useContext} from "react";
import { Text } from "../../globalStyles/typography";
import { Checkbox, StyledTodo, DeleteIcon } from "./style";

import { TodosContext } from "../../hooks/toDosContext";

function Todo({ page, todo, ...props }) {
  const { toggleDone, deleteTodo } = useContext(TodosContext);

  const toggleCheckbox = () => {
    toggleDone(todo.id);
  }

  const deleteHandler = () => {
    deleteTodo(todo.id)
  }

  return (
    <StyledTodo>
      <Checkbox type="checkbox" checked={todo.done} {...props} onChange={toggleCheckbox} />
      <Text size="1.1" bd="500" strike={todo.done} primary>
        {todo.content}
      </Text>
      <DeleteIcon className="material-icons" onClick={deleteHandler}>
        delete_outline
      </DeleteIcon>
    </StyledTodo>
  );
}

export default Todo;
