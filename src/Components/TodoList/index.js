import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";
import {
    getTodosService,
    deleteTodoService,
    updateTodoService,
    completeAllService,
} from "../../services/todos";

import {
    selectFilteredTodos,
    selectIsAllCompleted,
} from "../../redux/selectors";

import ToggleAll from "./ToggleAll";

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
        <Main>
            <ToggleAll
                isAllCompleted={isAllCompleted}
                onCompleteAll={() =>
                    dispatch(completeAllService(isAllCompleted))
                }
            />
            <Todos className="todos__list">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdateTodo={onUpdateTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </Todos>
        </Main>
    );
};


const Main = styled.section`
    position: relative;
    width: 500px;
    display: flex;
    flex-direction: column;
    background: #fff;
`;

const Todos = styled.ul``;

export default TodoList;
