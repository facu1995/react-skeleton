import { useTodos } from '../../../hooks/useTodos';
//import style from '../style/TodoTitle.module.css'

export const TodoTitle = () => {
    const { pendingTodos ,cant} = useTodos();

    return (
        <div //className={style.header}
        >
            <h1>Todos: {cant}</h1>
            <h3>Pendientes: {pendingTodos}</h3>
        </div>
    )
}
