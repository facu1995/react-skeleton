import { Todo } from "../interfaces/interfaces";


export enum typeAction{
    'addTodo' = 'addTodo',
    'toggleTodo' = 'toggleTodo',
    'resetTodo' = 'resetTodo',
    'deletTodo' = 'deletTodo'
}

export type TodoAction =
    | { type: typeAction.addTodo, payload: Todo }
    | { type: typeAction.resetTodo }
    | { type: typeAction.toggleTodo, payload: { id: string } }
    | { type: typeAction.deletTodo, payload: { id: string } };

export const doReset = (): TodoAction => ({
    type: typeAction.resetTodo
})

export const doToggleTodo = (id: string): TodoAction =>
    ({ type: typeAction.toggleTodo, payload: { id } })

export const doAddTodo = (id: string, desc: string, completed: boolean): TodoAction =>
    ({ type: typeAction.addTodo, payload: { id, desc, completed } })

export const doDeletTodo = (id: string): TodoAction =>
    ({ type: typeAction.deletTodo, payload: { id } })