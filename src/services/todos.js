import {
    addTodo,
    fetchTodos,
    deleteTodo,
    updateTodo,
    completeAll,
    clearCompleted,
} from "../redux/actions";
import { URL } from "../constants";

export const fetchCall = async (url = URL, config = {}) => {
    const req = await fetch(url, config);
    return await req.json();
};

export const getTodosService = () => async (dispatch) => {
    const res = await fetchCall();
    return dispatch(fetchTodos(res));
};

export const addTodoService = (todo) => async (dispatch) => {
    const res = await fetchCall(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            todo: todo,
        }),
    });
    return dispatch(addTodo(res));
};

export const deleteTodoService = (todo_id) => async (dispatch) => {
    const res = await fetchCall(`${URL}/${todo_id}`, {
        method: "DELETE",
    });
    return dispatch(deleteTodo(res.id));
};

export const updateTodoService = (todo_id, data) => async (dispatch) => {
    const res = await fetchCall(`${URL}/${todo_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return dispatch(updateTodo(todo_id, res));
};

export const completeAllService = (active) => async (dispatch) => {
    await fetchCall(`${URL}/toggle_completed`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ active: active }),
    });
    return dispatch(completeAll(active));
};

export const clearCompletedService = () => async (dispatch) => {
    await fetchCall(`${URL}/clear_completed`, {
        method: "DELETE",
    });
    return dispatch(clearCompleted());
};
