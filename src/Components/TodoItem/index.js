import { useState } from "react";
import styled from "styled-components";

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(todo.todo);

    const onChange = (event) => {
        onUpdateTodo(todo.id, { active: !event.target.checked });
    };

    const editOnDoubleClick = (event) => {
        setEdit(true);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onUpdateTodo(todo.id, { todo: value });
            setEdit(false);
        }
        if (event.key === "Escape") {
            setEdit(false);
            setValue(todo.todo);
        }
    };

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Todo className={`${todo.active ? "" : "completed"}`}>
            {edit ? (
                <EditTodo
                    type="text"
                    onChange={handleValueChange}
                    value={value}
                    onKeyDown={handleKeyDown}
                    autoFocus={true}
                />
            ) : (
                <View>
                    <CheckTodo
                        type="checkbox"
                        checked={!todo.active}
                        onChange={onChange}
                        data-testid="toggle"
                    />
                    <TodoLabel
                        onDoubleClick={() => editOnDoubleClick(todo)}
                        data-testid="label_todo"
                    >
                        {todo.todo}
                    </TodoLabel>
                    <Button onClick={() => onDeleteTodo(todo.id)}></Button>
                </View>
            )}
        </Todo>
    );
};


const Todo = styled.li`
    list-style-type: none;
    position: relative;
    width: 100%;
    /* border-top: 1px solid black; */
    border-bottom: 1px solid rgba(235, 232, 232, 0.767);
    color: #5c5858;
    &.completed{
        color: lightgrey;
        text-decoration: line-through;
    }
`;

const Button = styled.button`
    position: absolute;
    right: 10px;
    color: #cc9a9a;
    font-weight: bold;
    font-size: 26px;
    display: none;
    border: none;
    background: none;
`;

const View = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    & button:hover {
        color: #af5b5e;
    }

    & button:after {
        content: "x";
    }

    &:hover button {
        display: block;
    }
`;

const CheckTodo = styled.input`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    appearance: none;
    opacity: none;

    & + label {
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center left;
    }

    &:checked + label {
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
    }
`;

const TodoLabel = styled.label`
    font-size: 24px;
    padding: 15px 15px 15px 60px;
    font-weight: 500;

`;

const EditTodo = styled.input`
    position: relative;
    padding: 16px 16px 16px 0px;
    width: 440px;
    border: none;
    margin-left: 60px;
    font-size: 24px;
    font-weight: 500px;
    color: #4d4d4d;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);

`;

export default TodoItem;
