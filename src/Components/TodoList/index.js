import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TodoItem from "../TodoItem";
import {
    getTodosService,
    deleteTodoService,
    updateTodoService,
    completeAllService,
} from "../../services/todos";

import { selectFilteredTodos, selectIsAllCompleted } from '../../redux/selectors';

const TodoList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodosService());
    }, []);

    const filteredTodos = useSelector(selectFilteredTodos);
    const isAllCompleted = useSelector(selectIsAllCompleted);
    const onDeleteTodo = (todo_id) => {
        dispatch(deleteTodoService(todo_id));
    };

    const onUpdateTodo = async (todo_id, data) => {
        dispatch(updateTodoService(todo_id, data));
    };

    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={isAllCompleted}
                readOnly
            />
            <label
                htmlFor="toggle-all"
                onClick={() => dispatch(completeAllService(isAllCompleted))}
            />

            <ul className="todos__list">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdateTodo={onUpdateTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
