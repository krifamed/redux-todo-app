import { act, waitFor } from '@testing-library/react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TodoActions from './index';

let store;
let renderResult;
let actions ;

let todos = [{
    id: 136,
    todo: "hello world",
    active: true
}]
const mockStore = configureStore([thunk]);

describe("TodoActions", ()=> {

    beforeEach(async ()=> {
        act(()=> {
            store = mockStore({todos,filter: 'all'});
            renderResult= render(
                <Provider store={store}>
                    <TodoActions/>
                </Provider>
            );
            actions = store.getActions();
        });
    });
    it("should change filter to active", async()=> {
        const activeLink = renderResult.getByRole('link', {name: /active/i});
        fireEvent.click(activeLink);
        await waitFor(()=> {
            expect(actions[0].type).toEqual("APPLY_FILTER");
        });
        expect(actions[0].payload.filter).toEqual("active");
    });
    it("should change filter to completed", async()=> {
        const completedLink = renderResult.getByRole('link', {name: /completed/i});
        fireEvent.click(completedLink);
        await waitFor(()=> {
            expect(actions[0].type).toEqual("APPLY_FILTER");
        });
        expect(actions[0].payload.filter).toEqual("completed");
    });
});