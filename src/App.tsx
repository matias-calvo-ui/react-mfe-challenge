import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./types/Todo";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodosChange = (updatedTodos: Todo[]) => {
    setTodos(updatedTodos);
  };
  return (
    <main className="App">
      <h1>Todo List</h1>
      <ErrorBoundary>
        <TodoList initialTodos={todos} onTodosChange={handleTodosChange} />
      </ErrorBoundary>
    </main>
  );
}

export default App;
