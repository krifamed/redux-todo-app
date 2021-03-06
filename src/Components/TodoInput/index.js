import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addTodoService } from "../../services/todos";
import styled from "styled-components";
import useTodos from "../../hooks/useTodos";

const Input = styled.input`
    color: #4d4d4d;
    width: 500px;
    padding: 24px 24px 24px 60px;
    border: none;
    background: #fff;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    font-size: 24px;

    &:placeholder {
        color: #e6e6e6;
        font-size: 24px;
    }
`;

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const { data, isLoading, errors, handler } = useTodos();

    useEffect(()=>{
        if(isLoading===false&& data){
            dispatch(addTodoService([data]));
        }
    },[isLoading, data]);
    
    const onChange = (event) => {
        setTodo(event.target.value);
    };
    const saveTodo = async (event) => {
        if (event.key === "Enter" && todo !== "") {
            // return dispatch(addTodo({}));
            // addTodoService(todo)(dispatch);
            handler(async ()=> dispatch(addTodoService(todo)));
            setTodo("");
        }
    };
    return (
        <Input
            type="text"
            name="todo"
            placeholder="What needs to be done?"
            value={todo}
            onChange={onChange}
            onKeyDown={saveTodo}
        ></Input>
    );
};
export default TodoInput;
