import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const defaultState = {
    todos: [],
    filter: "all",
};
// const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function createReduxStore(state = defaultState) {
    return createStore(
        reducer,
        state,
        composeEnhancers(applyMiddleware(thunk))
    );
}

// this return undefined in the unit test

// export function createReduxStore(state = defaultState) {
//     return createStore(
//         reducer,
//         state,
//         compose(applyMiddleware(thunk), enableReduxDevTools)
//     );
// }
