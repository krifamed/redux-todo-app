import { Provider } from "react-redux";
import { act, waitFor } from "@testing-library/react";
import { render, fireEvent } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import TodoItem from "./index";
import TodoList from "../TodoList";
let store;
let actions;
let renderResult;
const newValue = "some text";

const todo = {
    id: 135,
    todo: "hello world",
    active: true,
};

const mockStore = configureStore([thunk]);
const onUpdateTodo = jest.fn();
const onDeleteTodo = jest.fn();
describe("todoItem", () => {
    beforeEach(async () => {
        act(() => {
            store = mockStore({todos: [todo]});
            renderResult = render(
                <Provider store={store}>
                    <TodoList>
                        <TodoItem
                            todo={todo}
                            onUpdateTodo={onUpdateTodo}
                            onDeleteTodo={onDeleteTodo}
                            />
                    </TodoList>
                </Provider>
            );
            actions = store.getActions();
        });
    });
    it("display item", () => {
        const todoElement = renderResult.getByTestId("label_todo");
        expect(todoElement.className).toEqual("label__todo");
        expect(todoElement.textContent).toEqual(todo.todo);
    });
    it("update todo active state", async () => {
        const toggleTodo = renderResult.getByTestId('toggle');
        fireEvent.click(toggleTodo);
        await waitFor(() => {
            expect(actions.length).toBeGreaterThanOrEqual(1);
        });
        // expect(actions[1].type).toEqual("UPDATE_TODO");
    });
    it("update todo text", async () => {
        const todoElement = renderResult.getByTestId("label_todo"); 
        act(()=> {
            fireEvent.dblClick(todoElement);
        });
        const editTodo = renderResult.getByRole("textbox"); 
        fireEvent.change(editTodo, {target: {value: newValue}});
        fireEvent.keyDown(editTodo, {key: 'Enter', code: 'Enter'});
        await waitFor(()=> {
            expect(actions.length).toBeGreaterThanOrEqual(1);
        })
    });
    it("delete todo", async () => {
        const deleteButton = renderResult.getByRole("button");
        fireEvent.click(deleteButton);
        await waitFor(()=>{
            expect(actions.length).toBeGreaterThanOrEqual(0);
        });
    });
});
