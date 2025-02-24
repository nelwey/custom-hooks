import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);

    }, [todos])

    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }


    const handletoggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handletoggleTodo,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todosCount: todos.length
    }
}
