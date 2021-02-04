import { useSelector, useDispatch } from "react-redux";
import { applyFilter } from "../../redux/actions";
import { clearCompletedService } from "../../services/todos";
import { selectCompletedCount, selectTodosLength, selectFilter } from '../../redux/selectors';

const TodoActions = () => {
    const dispatch = useDispatch();

    const filter = useSelector(selectFilter);

    const completedCount = useSelector(selectCompletedCount);

    const todosCount = useSelector(selectTodosLength) - completedCount;

    return (
        <section className="todos__state">
            <span>{`${todosCount} item${
                todosCount > 1 ? "s" : ""
            } left`}</span>
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
                {completedCount !== 0 && (
                    <button
                        className="clear_completed"
                        onClick={() => dispatch(clearCompletedService())}
                    >
                        Clear completed
                    </button>
                )}
            </div>
        </section>
    );
};

export default TodoActions;
