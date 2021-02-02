import { useSelector, useDispatch } from "react-redux";
import { clearCompleted, applyFilter } from '../../redux/actions'; 

const TodoActions = () => {
  const dispatch = useDispatch();

  const filter = useSelector(store => store.filter);

  const completed_count = useSelector(store => store.todos.reduce((acc, val)=>val.active===false?acc+1:acc,0));

  const todos_count = useSelector(store => store.todos.length) - completed_count;

  return (
    <section className="todos__state">
      <span>{`${todos_count} item${todos_count>1?'s':''} left`}</span>
      <ul>
        <li>
          <a
            className={filter === "all" ? "active" : ""}
            href="#/all"
            onClick={() => dispatch(applyFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filter === "active" ? "active" : ""}
            onClick={() => dispatch(applyFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filter === "completed" ? "active" : ""}
            onClick={() => dispatch(applyFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>
      <div>
        {completed_count!==0 && (
          <button className="clear_completed" onClick={() => dispatch(clearCompleted)}>
            Clear completed
          </button>
        )}
      </div>
    </section>
  );
};

export default TodoActions;
