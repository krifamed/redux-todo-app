import { act } from "@testing-library/react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "./index";

let store;
let renderResult;
const todo = {
    id: 10,
    todo: "hello world",
    active: true,
};

const onUpdate = jest.fn();
const onDelete = jest.fn();
describe("todoItem", () => {
    beforeEach(async () => {
        act(() => {
            renderResult = render(
                <TodoItem todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
            );
        });
    });
    it("display item", () => {
        const todoElement = renderResult.getByTestId("label_todo");
        expect(todoElement.className).toEqual("label__todo");
        expect(todoElement.textContent).toEqual(todo.todo);
    });
    it('update todo active state', ()=> {
        const toggleTodo = renderResult.getByRole('checkbox', {className: 'toggle'});
        console.log(toggleTodo);
        // fireEvent.change(, )
    });
    it('update todo text', ()=> {

    });
    it('delete todo', ()=> {

    });
});
