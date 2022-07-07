
import { TodoState } from '../interfaces/interfaces';
import { TodoAction ,typeAction} from '../actions/actions';

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case typeAction.addTodo:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case typeAction.resetTodo:
            return {
                ...state,
                todos: []
            }
        case typeAction.toggleTodo:
            return {
                ...state,
                todos: state.todos.map(({ ...todo }) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}