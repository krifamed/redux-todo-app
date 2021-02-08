import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import TodoActions from "./Components/TodoActions";
import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const App = () => {
    return (
        <div className="App">
            <Header />
            <Wrapper>
                <TodoInput />
                <TodoList />
                <TodoActions />
            </Wrapper>
        </div>
    );
};

export default App;
