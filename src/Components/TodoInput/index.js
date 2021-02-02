import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addTodo } from '../../redux/actions';

const Header = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const onChange = (event) => {
        setTodo(event.target.value);
    }

    const saveTodo = (event) => {
        if(event.key === 'Enter' && todo !== ''){
            dispatch(addTodo(todo));
            setTodo('');
        }
    }
    
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