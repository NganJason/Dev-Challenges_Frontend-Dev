import { localStorageDM } from "../dm/localStorage";

export const initTodosHandler = () => {
    let todosDM = new localStorageDM("todos");
    let todosHandler = new Todos(todosDM)

    return todosHandler
}

class Todos {
    constructor(todosDM) {
        this.todos = todosDM.get();
        this.todosDM = todosDM;
    }

    getTodos() {
        return this.todos
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.todosDM.save(this.todos);

        return this.todos;
    }

    toggleDone(id) {
        let idx = this.getIdxById(id);
        if (idx === null) {
            return;
        }

        this.todos[idx].done = !this.todos[idx].done; 
        this.todosDM.save(this.todos);

        return this.todos
    }

    deleteTodo(id) {
        let idx = this.getIdxById(id);
        if (idx === null) {
        return;
        }

        this.todos.splice(idx, 1);
        this.todosDM.save(this.todos);

        return this.todos
    };

    getIdxById(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
            return i;
            }
        }

        return null;
    };
}