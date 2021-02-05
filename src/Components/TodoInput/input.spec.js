import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Header from "./index";
import userEvent from "@testing-library/user-event";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

describe("Input Component", () => {
    let renderResult = null;
    let store = null;
    beforeEach(async () => {
        store = mockStore({ todos: [] });
        await act(async () => {
            renderResult = render(
                <Provider store={store}>
                    <Header />
                </Provider>
            );
        });
    });

    it("add new todo", async () => {
        const input = renderResult.getByRole("textbox", {
            class: "todo__input",
        });
        const actions = store.getActions();
        
        // act(()=> {
            // fireEvent.change(input, {target: {value: 'Hello world'}});
        // })
        fireEvent.change(input, {target: {value: 'Hello world'}});
        fireEvent.keyDown(input, { key: "Enter", code: "Enter"});
        // console.log(input);
        await waitFor(() => {
            expect(actions.length).toEqual(1);
        })
        expect(actions[0].type).toEqual("ADD_TODO");
        expect(actions[0].payload.todo.active).toEqual(true);
    });
});
