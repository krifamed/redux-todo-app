import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
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
import useTodos from "../../hooks/useTodos";

const TodoList = () => {
    const dispatch = useDispatch();
    const {isLoading, errors, handler } = useTodos();

    useEffect(() => {
        handler(()=> dispatch(getTodosService()));
    }, []);

    const filteredTodos = useSelector(selectFilteredTodos);
    const isAllCompleted = useSelector(selectIsAllCompleted);

    const onDeleteTodo = (todo_id) => {
        handler(async () => dispatch(deleteTodoService(todo_id)));
    };

    const onUpdateTodo = async (todo_id, data) => {
        handler(async () => dispatch(updateTodoService(todo_id, data)));
    };

    const onCompleteAll = async () => {
        handler(()=> dispatch(completeAllService(isAllCompleted)));
    };

    if (isLoading) return <div>Loading ...</div>;

    if (errors) return <div>Somthing went wrong!</div>;

    return (
        <Main>
            <ToggleAll
                isAllCompleted={isAllCompleted}
                onCompleteAll={onCompleteAll}
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
