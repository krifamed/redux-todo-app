export const selectFilteredTodos = (store) => {
    switch (store.filter) {
        case "active":
            return store.todos.filter((todo) => todo.active);
        case "completed":
            return store.todos.filter((todo) => todo.active === false);
        default:
            return store.todos;
    }
};

export const selectIsAllCompleted = (store) =>
    store.todos.every((todo) => todo.active === false);

export const selectCompletedCount = (store) =>
    store.todos.reduce((acc, val) => (val.active === false ? acc + 1 : acc), 0);

export const selectTodosLength = (store) => store.todos.length;

export const selectFilter = (store) => store.filter;
