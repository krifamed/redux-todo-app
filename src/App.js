import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import TodoActions from "./Components/TodoActions";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <TodoInput />
                <TodoList />
                <TodoActions />
            </div>
        </div>
    );
};

export default App;
