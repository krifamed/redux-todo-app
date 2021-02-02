import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import {updateTodo, deleteTodo, completeAll} from '../../redux/actions';

const TodoList = () => {
    const dispatch = useDispatch();
    const filteredTodos = useSelector(store => {
        switch(store.filter){
            case 'active': return store.todos.filter(todo => todo.active);
            case 'completed': return store.todos.filter(todo => todo.active===false);
            default: return store.todos;
        }
    });

    const count_completed = useSelector(store => store.todos.reduce((acc, val)=> acc+(val.active===false), 0)===store.todos.length && store.todos.length);
    const onDeleteTodo = todo_id => {
        dispatch(deleteTodo(todo_id))
    }

    const onUpdateTodo= (todo_id, data) => {
        dispatch(updateTodo(todo_id, data));
    }
    
  return (
    <section className="main">
        <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={count_completed}
            readOnly
        />
        <label htmlFor="toggle-all" onClick={()=> dispatch(completeAll(count_completed))} />

        <ul className="todos__list">
            {
                filteredTodos.map(todo=>(
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        // editTodo={editTodo}
                        onUpdateTodo={onUpdateTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))
            }
        </ul>

    </section>
  );
};

export default TodoList;