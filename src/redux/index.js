import {createStore} from 'redux';
import reducer from './reducer';
const defaultState = {
    todos: [],
    filter: 'all'
} 
const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export function createReduxStore(state= defaultState){
    return createStore(reducer, state, enableReduxDevTools)
}