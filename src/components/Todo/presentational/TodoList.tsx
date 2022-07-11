import { useTodos } from "../../../hooks/useTodos";
import { TodoItem } from './TodoItem';

export const TodoList = () => {

    const { todos } = useTodos();
    return (
        <ul>
            {todos.map(todo => {
                const { id } = todo;
                return (
                    <TodoItem key={id} todo={todo} />)
            })}
        </ul>
    )
}
