const initialState = [];

export default function todos(todos = initialState, action) {
    switch (action.type) {
        case "FETCH_TODOS":
            return [...todos, ...action.payload.todos];
        case "ADD_TODO":
            return [...todos, action.payload.todo];
        case "DELETE_TODO":
            return todos.filter((todo) => todo.id !== action.payload.id);
        case "UPDATE_TODO":
            return todos.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, ...action.payload.data }
                    : todo
            );
        case "COMPLETE_ALL":
            return todos.map((todo) => ({
                ...todo,
                active: action.payload.active,
            }));
        case "CLEAR_COMPLETED":
            return todos.filter((todo) => todo.active);
        default:
            return todos;
    }
}
