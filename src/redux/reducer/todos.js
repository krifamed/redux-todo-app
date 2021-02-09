import * as types from "../actionsTypes";

const initialState = []

export default function todos(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_TODOS:
            return [...state, ...action.payload.todos];
        case types.ADD_TODO:
            return [...state, action.payload.todo];
        case types.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);
        case types.UPDATE_TODO:
            return state.map((todo) =>
            todo.id === action.payload.id
                ? { ...todo, ...action.payload.data }
                : todo
        );
        case types.COMPLETE_ALL:
            return state.map((todo) => ({
                ...todo,
                active: action.payload.active,
            }));
        case types.CLEAR_COMPLETED:
            return state.filter((todo) => todo.active);
        default:
            return state;
    }
}
