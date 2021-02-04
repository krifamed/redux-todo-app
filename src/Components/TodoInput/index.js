import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../redux/actions";
import { URL } from "../../constants";

const Header = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const onChange = (event) => {
        setTodo(event.target.value);
    };

    const saveTodo = async (event) => {
        if (event.key === "Enter" && todo !== "") {
            const req = await fetch(`${URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    todo: todo,
                }),
            });
            const res = await req.json();
            if (res) {
                dispatch(addTodo(res));
                setTodo("");
            } else {
                console.log("Error: can't add a new todo");
            }
        }
    };
    return (
        <input
            type="text"
            name="todo"
            placeholder="What needs to be done?"
            className="todo__input"
            value={todo}
            onChange={onChange}
            onKeyDown={saveTodo}
        />
    );
};
export default Header;
