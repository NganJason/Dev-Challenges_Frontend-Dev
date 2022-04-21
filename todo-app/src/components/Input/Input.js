import React, {useState, useContext} from "react";
import { TodosContext } from "../../hooks/toDosContext";

import Button from "../Button";
import { StyledForm, StyledInput } from "./style";

function Input() {
  const { addTodo } = useContext(TodosContext);
  const [todo, setTodo] = useState("")

  const editTodo = (e) => {
    setTodo(e.target.value)
  }

  const submitTodo = () => {
    if (todo === "") {
      return
    }
    
    addTodo({done:false, content:todo, id:Date.now()})
    setTodo("")
  }

  return (
    <StyledForm>
      <StyledInput placeholder="Add details" value={todo} onChange={editTodo}></StyledInput>
      <Button w="6" h="3.5" onClick={submitTodo}>Add</Button>
    </StyledForm>
  );
  
}

export default Input;
