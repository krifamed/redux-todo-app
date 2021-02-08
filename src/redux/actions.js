import * as types from './actionsTypes';

export const fetchTodos = (todos) => ({
    type: types.FETCH_TODOS,
    payload: { todos },
});

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    payload: { todo },
});

export const updateTodo = (id, data) => ({
    type: types.UPDATE_TODO,
    payload: { id, data },
});

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    payload: { id },
});

export const completeAll = (active) => ({
    type: types.COMPLETE_ALL,
    payload: { active },
});

export const clearCompleted = {
    type: types.CLEAR_COMPLETED,
};

export const applyFilter = (filter) => ({
    type: types.APPLY_FILTER,
    payload: { filter },
});
