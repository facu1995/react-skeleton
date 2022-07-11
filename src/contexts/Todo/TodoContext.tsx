import {createContext} from "react";
import { TodoState } from "../../components/Todo/interfaces/interfaces";

export type TodoContextProps={
    todoState:TodoState
    addTodo: (description:string) => void
    handleReset: () => void
    doToggleTodo: (id: string) => void
    doDeletTodo:(id: string) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);