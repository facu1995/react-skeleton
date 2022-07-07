import {createContext} from "react";
import { TodoState,Todo } from "../../components/Todo/interfaces/interfaces";

export type TodoContextProps={
    todoState:TodoState
    addTodo: (todo: Todo) => void
    handleReset: () => void
    doToggleTodo: (id: string) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);