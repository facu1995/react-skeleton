import { useTodos } from '../../../hooks/useTodos';

export const Title = () => {
    const { todos, pendingTodos } = useTodos();
    return (
        <>
            <h1>Todos: {todos.length}</h1>
            <h2>Pendientes: {pendingTodos}</h2>
        </>
    )
}
