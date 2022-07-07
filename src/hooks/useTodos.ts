import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';

export const useTodos = () => {

    const { todoState,toggleTodo } = useContext(TodoContext);


    return {
        todos: todoState.todos,
        toggleTodo,
        pendingTodos: todoState.todos.filter(todo => !todo.completed).length
    }
}