import React, {useState, useContext} from "react";
import { TodosContext } from "../../hooks/toDosContext";

import Button from "../Button";
import { StyledForm, StyledInput } from "./style";

function Input() {
  const { addTodo } = useContext(TodosContext);
  const [input, setInput] = useState("")

  const editInput = (e) => {
    setInput(e.target.value)
  }

  const submitTodo = () => {
    if (input === "") {
      return;
    }
    
    addTodo({ done: false, content: input, id: Date.now() });
    setInput("");
  }

  return (
    <StyledForm>
      <StyledInput
        placeholder="Add details"
        value={input}
        onChange={editInput}
      ></StyledInput>
      <Button w="6" h="3.5" onClick={submitTodo}>
        Add
      </Button>
    </StyledForm>
  );
  
}

export default Input;
