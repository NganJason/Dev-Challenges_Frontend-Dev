import React, {useState} from "react";
import Button from "../Button";
import { StyledForm, StyledInput } from "./style";

function Input({addTodo}) {
  const [todo, setTodo] = useState("")

  const editTodo = (e) => {
    setTodo(e.target.value)
  }

  const submitTodo = () => {
    if (todo === "") {
      return
    }
    
    addTodo({done:false, content:todo})
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
