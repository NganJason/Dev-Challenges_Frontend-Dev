import React, {useContext} from "react";
import { Checkbox, StyledTodo, DeleteIcon, StyledContent } from "./style";

import { TodosContext } from "../../hooks/toDosContext";

function Todo({ page, todo, ...props }) {
  const { toggleDone, deleteTodo, editContent } = useContext(TodosContext);

  const toggleCheckbox = () => {
    toggleDone(todo.id);
  }

  const deleteHandler = () => {
    deleteTodo(todo.id)
  }

  const editHandler = (e) => {
    editContent(todo.id, e.target.value)
  }

  return (
    <StyledTodo>
      <Checkbox
        type="checkbox"
        checked={todo.done}
        {...props}
        onChange={toggleCheckbox}
      />
      <StyledContent size="1.1" bd="500" strike={todo.done} primary value={todo.content} onChange={editHandler}>
      </StyledContent>
      <DeleteIcon className="material-icons" onClick={deleteHandler}>
        delete_outline
      </DeleteIcon>
    </StyledTodo>
  );
}

export default Todo;
