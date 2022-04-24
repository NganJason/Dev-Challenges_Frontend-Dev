import { localStorageDM } from "../dm/localStorage";

export const initTodosHandler = () => {
    let todosDM = new localStorageDM("todos");
    let todosHandler = new Todos(todosDM)

    return todosHandler
}

class Todos {
    constructor(todosDM) {
        this.todosDM = todosDM;
        this.todos = this.getDefaultTodos();
    }

    getDefaultTodos() {
        let defaultTodos = this.todosDM.get();
        if (defaultTodos === undefined) {
          return {};
        }

        return defaultTodos;
    }

    getTodos(listId) {
        if (!(listId in this.todos)) {
            return []
        }

        return this.todos[listId]
    }

    addTodo(listId, todo) {
        if (!(listId in this.todos)) {
            this.todos[listId] = []
        }

        let todos = this.todos[listId]
        todos.push(todo);

        this.todosDM.save(this.todos);

        return todos;
    }

    editContent(listId, taskId, content) {
        if (!(listId in this.todos)) {
            return []
        }

        let todos = this.todos[listId]
        let idx = this.getIdxById(todos, taskId);
        if (idx === null) {
            return todos;
        }

        todos[idx].content = content;
        this.todosDM.save(this.todos);
        
        return todos;
    }

    toggleDone(listId, taskId) {
        if (!(listId in this.todos)) {
          return [];
        }

        let todos = this.todos[listId];
        let idx = this.getIdxById(todos, taskId);
        if (idx === null) {
            return todos;
        }

        todos[idx].done = !todos[idx].done; 
        this.todosDM.save(this.todos);

        return todos
    }

    deleteTodo(listId, taskId) {
        if (!(listId in this.todos)) {
          return [];
        }

        let todos = this.todos[listId];
        let idx = this.getIdxById(todos, taskId);

        if (idx === null) {
        return todos;
        }

        todos.splice(idx, 1);
        this.todosDM.save(this.todos);

        return todos
    };

    getIdxById(todos, taskId) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === taskId) {
              return i;
            }
        }

        return null;
    };
}