export const fetchTodos = (todos) => ({
    type: "FETCH_TODOS",
    payload: { todos },
});

export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: { todo },
});

export const updateTodo = (id, data) => ({
    type: "UPDATE_TODO",
    payload: { id, data },
});

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: { id },
});

export const completeAll = (active) => ({
    type: "COMPLETE_ALL",
    payload: { active },
});

export const clearCompleted = {
    type: "CLEAR_COMPLETED",
};

export const applyFilter = (filter) => ({
    type: "APPLY_FILTER",
    payload: { filter },
});
