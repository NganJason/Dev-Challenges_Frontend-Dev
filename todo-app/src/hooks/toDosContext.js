import React, {useState} from "react"
import { initTodosHandler } from "../handlers/todosHandler";

export const TodosContext = React.createContext()
const todosHandler = initTodosHandler()

export function TodosProvider({children}) {
    const [todos, setTodos] = useState(todosHandler.getTodos())

    const addTodo = (todo) => {
        setTodos([...todosHandler.addTodo(todo)])
    };

    const editContent = (id, content) => {
        setTodos([...todosHandler.editContent(id, content)]);
    }

    const toggleDone = (id) => {
        setTodos([...todosHandler.toggleDone(id)])
    };

    const deleteTodo = (id) => {
        setTodos([...todosHandler.deleteTodo(id)])
    };

    const value = { todos, addTodo, toggleDone, deleteTodo, editContent };

    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    );
}