import React from 'react';
import { act, waitFor } from "@testing-library/react";
import { render } from '@testing-library/react';
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TodoList from './index';

const mockStore = configureStore([thunk]);
describe('todoList', ()=> {
    let store ;
    let renderResult;
    let useEffect
    beforeEach(async ()=> {
        store = mockStore({ todos : []});
        act(()=> {
            useEffect = jest.spyOn(React, 'useEffect');
            renderResult = render(
                <Provider store={store}>
                    <TodoList/>
                </Provider>
            );
        });
    });

    it('pass the data to the store', async ()=> {
        const actions = store.getActions();
        await waitFor(()=> {
            expect(actions.length).toEqual(1);
            expect(actions[0].type).toBe('FETCH_TODOS');
            expect(Array.isArray(actions[0].payload.todos)).toEqual(true);

        })
    });
});