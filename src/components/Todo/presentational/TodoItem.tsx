import { useTodos } from "../../../hooks/useTodos";
import { Todo } from '../interfaces/interfaces';
import style from '../style/TodoItem.module.css'
interface props{
    todo:Todo
}

export const TodoItem = ({todo}:props) => {
    const { doToggleTodo } = useTodos();
    const {id,desc, completed}=todo;
    
    const toggleTodo = (id: string) => {
        doToggleTodo(id);
    }

    return (
    <li className={`${style.todoItem} ${completed&& style.tachar}`} onClick={()=>toggleTodo(id)}>
        {desc}
    </li>
    )
}
