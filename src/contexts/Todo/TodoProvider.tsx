import { TodoContext } from "./TodoContext";
import { useReducer } from 'react';
import * as actions from "../../components/Todo/actions/actions"
import { todoReducer } from "../../components/Todo/state/todoReducer";
import { TodoState, Todo } from '../../components/Todo/interfaces/interfaces';

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: "1",
            desc: "Recolectar las piedras del infinito",
            completed: false
        },
        {
            id: "2",
            desc: "Piedra del alma",
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const addTodo = (todo: Todo) => {
        const {id, desc, completed} =todo;
        dispatch(actions.doAddTodo(id, desc, completed));
    }
    const handleReset = () => {
        dispatch(actions.doReset());
    }

    const doToggleTodo = (id:string) => {
        dispatch(actions.doToggleTodo(id));
    }
    return (
        <TodoContext.Provider value={{
            todoState,
            handleReset,
            addTodo,
            doToggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
