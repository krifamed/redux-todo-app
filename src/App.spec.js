import { render, screen } from "@testing-library/react";
import App from './App';
import {Provider} from 'react-redux';
import { createReduxStore } from "./redux";

describe("App Component", () => {
    it("Render App component", () => {
        const store = createReduxStore();
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        );
        expect(screen.getByText('todos')).toBeInTheDocument();
    });
});
