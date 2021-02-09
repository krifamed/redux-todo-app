import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { applyFilter } from "../../redux/actions";
import { clearCompletedService } from "../../services/todos";
import {
    selectCompletedCount,
    selectTodosLength,
    selectFilter,
} from "../../redux/selectors";

import useTodos from '../../hooks/useTodos';

const TodoActions = () => {
    const dispatch = useDispatch();
    const { data, isLoading, errors, handler } = useTodos();

    const filter = useSelector(selectFilter);

    const completedCount = useSelector(selectCompletedCount);

    const todosCount = useSelector(selectTodosLength) - completedCount;

    const onClearCompleted = ()=> {
        handler(()=> dispatch(clearCompletedService()));
    }

    return (
        <TodosState>
            <span>{`${todosCount} item${todosCount > 1 ? "s" : ""} left`}</span>
            <Filters>
                <FilterElm>
                    <FilterLink
                        className={filter === "all" ? "active" : ""}
                        href="#/all"
                        onClick={() => dispatch(applyFilter("all"))}
                    >
                        All
                    </FilterLink>
                </FilterElm>
                <FilterElm>
                    <FilterLink
                        href="#/active"
                        className={filter === "active" ? "active" : ""}
                        onClick={() => dispatch(applyFilter("active"))}
                    >
                        Active
                    </FilterLink>
                </FilterElm>
                <FilterElm>
                    <FilterLink
                        href="#/completed"
                        className={filter === "completed" ? "active" : ""}
                        onClick={() => dispatch(applyFilter("completed"))}
                    >
                        Completed
                    </FilterLink>
                </FilterElm>
            </Filters>
            <div>
                {completedCount !== 0 && (
                    <Button onClick={onClearCompleted}>
                        Clear completed
                    </Button>
                )}
            </div>
        </TodosState>
    );
};

export default TodoActions;

const TodosState = styled.section`
    background: #fff;
    width: 500px;
    color: #777;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
`;

const Filters = styled.ul`
    display: flex;
    justify-content: space-around;
`;

const FilterElm = styled.li`
    list-style-type: none;
    &:hover {
        cursor: pointer;
    }
`;

const FilterLink = styled.a`
    padding-left: 5px;
    padding-right: 5px;
    color: #777;
    &.active {
        border-radius: 3px;
        border: 1px solid rgba(175, 47, 47, 0.2);
    }
`;

const Button = styled.button`
    color: #777;
    border: none;
    background: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
