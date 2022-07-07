import { TodoProvider } from '../../contexts/TodoProvider';
import { TodoList } from './TodoList';
import { Title } from './Title';

export const Todo = () => {
    return (
        <TodoProvider>
            <Title/>
            <TodoList></TodoList>
        </TodoProvider>
    )
}
