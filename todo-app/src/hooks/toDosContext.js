import React, { useState, useContext, useEffect } from "react"
import { initTodosHandler } from "../handlers/todosHandler";
import { DateContext } from "./dateContext";

export const TodosContext = React.createContext()
const todosHandler = initTodosHandler()

export function TodosProvider({children}) {
    const [todos, setTodos] = useState([])
    const [listId, setListId] = useState()
    const { dateObj } = useContext(DateContext);

    useEffect(() => {
      setListId(dateObj.getTime());
    }, [dateObj]);

    useEffect(() => {
        setTodos(todosHandler.getTodos(listId))
    }, [listId])

    const addTodo = (todo) => {
        setTodos([...todosHandler.addTodo(listId, todo)])
    };

    const editContent = (taskId, content) => {
        setTodos([...todosHandler.editContent(listId, taskId, content)]);
    }

    const toggleDone = (taskId) => {
        setTodos([...todosHandler.toggleDone(listId, taskId)])
    };

    const deleteTodo = (taskId) => {
      setTodos([...todosHandler.deleteTodo(listId, taskId)]);
    };

    const value = { todos, addTodo, toggleDone, deleteTodo, editContent };

    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    );
}