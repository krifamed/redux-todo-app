import * as types from '../actionsTypes';

const initialState = [];

export default function todos(todos = initialState, action) {
    switch (action.type) {
        case types.FETCH_TODOS:
            return [...todos, ...action.payload.todos];
        case types.ADD_TODO:
            return [...todos, action.payload.todo];
        case types.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
        case types.UPDATE_TODO:
            return todos.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, ...action.payload.data }
                    : todo
            );
        case types.COMPLETE_ALL:
            return todos.map((todo) => ({
                ...todo,
                active: action.payload.active,
            }));
        case types.CLEAR_COMPLETED:
            return todos.filter((todo) => todo.active);
        default:
            return todos;
    }
}
