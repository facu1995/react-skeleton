import { TodoContext } from '../contexts/Todo/TodoContext';
import { useContext } from 'react';

export const useTodos = () => {

    const { todoState,
        handleReset,
        addTodo,
        doToggleTodo,doDeletTodo } = useContext(TodoContext);


    return {
        todos: todoState.todos,
        doToggleTodo,   
        addTodo,
        handleReset,
        doDeletTodo,
        pendingTodos: todoState.todos.filter(todo => !todo.completed).length,
        cant:todoState.todos.length
    }
}