import {
    fetchTodos,
    deleteTodo,
    updateTodo,
    completeAll,
    clearCompleted,
} from "../redux/actions";
import { URL } from "../constants";

export const getTodosService = () => async (dispatch) => {
    // dispatch({fetchTodoRequest});
    try {
        const req = await fetch(`${URL}`);
        const res = await req.json();
        return dispatch(fetchTodos(res));
    } catch (err) {
        console.error(err);
    }
};

export const deleteTodoService = (todo_id) => async (dispatch) => {
    try {
        const req = await fetch(`${URL}/${todo_id}`, {
            method: "DELETE",
        });
        const res = await req.json();
        return dispatch(deleteTodo(res.id));
    } catch (err) {
        console.error(err);
    }
};

export const updateTodoService = (todo_id, data) => async (dispatch) => {
    try {
        const req = await fetch(`${URL}/${todo_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const res = await req.json();
        return dispatch(updateTodo(todo_id, res));
    } catch (err) {
        console.error(err);
    }
};

export const completeAllService = (active) => async (dispatch) => {
    try {
        const req = await fetch(`${URL}/toggle_completed`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ active: active }),
        });
        const res = req.json();
        return dispatch(completeAll(active));
    } catch (err) {
        console.error(err);
    }
};

export const clearCompletedService = () => async (dispatch) => {
    try {
        const req = await fetch(`${URL}/clear_completed`, {
            method: "DELETE",
        });
        const res = req.json();
        return dispatch(clearCompleted);
    } catch (err) {
        console.error(err);
    }
};
