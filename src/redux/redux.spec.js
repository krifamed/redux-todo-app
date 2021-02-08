import * as actions from "./actions";
import * as types from './actionsTypes';
import todosReducer from "./reducer/todos";
import filterReducer from "./reducer/filters";

const todos = [];

const id = 1;
const data = { active: false };
const todo = {
    id,
    todo: "redux test",
    active: true,
};

describe("actions", () => {
    it("should create an action to fetch todos", () => {
        const expectedAction = {
            type: types.FETCH_TODOS,
            payload: { todos },
        };
        expect(actions.fetchTodos(todos)).toEqual(expectedAction);
    });
    it("should create an action to add todos", () => {
        const expectedAction = {
            type: types.ADD_TODO,
            payload: { todo },
        };
        expect(actions.addTodo(todo)).toEqual(expectedAction);
    });
    it("should create an action to update todos", () => {
        // const data = {todo: "hello world"}
        const expectedAction = {
            type: types.UPDATE_TODO,
            payload: { id, data },
        };
        expect(actions.updateTodo(id, data)).toEqual(expectedAction);
    });
    it("should create an action to delete todos", () => {
        const expectedAction = {
            type: types.DELETE_TODO,
            payload: { id },
        };
        expect(actions.deleteTodo(id)).toEqual(expectedAction);
    });

    describe("reducers", () => {
        describe("todos reducer", () => {
            it("should handle the ADD_TODO", () => {
                expect(
                    todosReducer([], {
                        type: types.ADD_TODO,
                        payload: { todo },
                    })
                ).toEqual([todo]);
            });
            it("should handle the UPDATE_TODO", () => {
                expect(
                    todosReducer([todo], {
                        type: types.UPDATE_TODO,
                        payload: { id, data },
                    })
                ).toEqual([{ ...todo, ...data }]);
            });
            it("should handle the DELETE_TODO", () => {
                expect(
                    todosReducer([todo], {
                        type: types.DELETE_TODO,
                        payload: { id },
                    })
                ).toEqual([]);
            });
            it("should handle the CLEAR_COMPLETED", () => {
                expect(
                    todosReducer(
                        [
                            todo,
                            {
                                id: 2,
                                todo: "other one",
                                active: false,
                            },
                        ],
                        {
                            type: types.CLEAR_COMPLETED,
                        }
                    )
                ).toEqual([todo]);
            });
            it("should handle the COMPLETE_ALL", () => {
                expect(
                    todosReducer([todo], {
                        type: types.COMPLETE_ALL,
                        payload: { active: false },
                    })
                ).toEqual([
                    {
                        ...todo,
                        active: false,
                    },
                ]);
            });
        });
        describe("filter reducer", () => {
            it('should handle APPLY_FILTER', ()=> {
                expect(filterReducer("all", {
                    type: types.APPLY_FILTER,
                    payload: {filter: 'completed'}
                })).toEqual("completed");

            })
        });
    });
});
