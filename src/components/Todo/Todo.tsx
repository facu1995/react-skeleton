import { TodoTitle } from './presentational/TodoTitle';
import { TodoProvider } from '../../contexts/Todo/TodoProvider';
import { TodoList } from './presentational/TodoList';
//import style from './style/Todo.module.css';
import { TodoAdd } from './presentational/TodoAdd';

export const Todo = () => {
    return (
        <div //className={style.todo}
        >
            <TodoProvider>
                <TodoTitle />
                <TodoList></TodoList>
                <TodoAdd></TodoAdd>
            </TodoProvider>
        </div>
    )
}
