import { Title } from './presentational/TodoTitle';
import { TodoProvider } from '../../contexts/Todo/TodoProvider';
import { TodoList } from './presentational/TodoList';
import style from './style/Todo.module.css';

export const Todo = () => {
    return (
        <div className={style.todo}>
            <TodoProvider>
                <Title />
                <TodoList></TodoList>
            </TodoProvider>
        </div>
    )
}
